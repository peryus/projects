import express from "express";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";

dotenv.config();

const app = express();
const PORT = 3000;
const users = [];

app.use(express.json());

app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false,
      },
    })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new LocalStrategy(
        {
          usernameField: "email",
          passwordField: "password",
        },
        async (email, password, done) => {
          const user = users.find((user) => user.email === email);

          if (!user) {
            return done(null, false);
          }

          const isPasswordValid = await bcrypt.compare(
              password,
              user.password
          );

          if (!isPasswordValid) {
            return done(null, false);
          }

          return done(null, user);
        }
    )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.find((user) => user.id === id);
  done(null, user);
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).send("Not authenticated");
}

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    id: users.length + 1,
    email,
    password: hashedPassword,
  };

  users.push(user);

  res.send("User registered");
});

app.post(
    "/login",
    passport.authenticate("local"),
    (req, res) => {
      res.send("Login successful");
    }
);
app.post("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }

    res.send("Logout successful");
  });
});

app.get("/protected", isAuthenticated, (req, res) => {
  res.send("Protected route");
});

app.get("/", (req, res) => {
  res.send("Passport server");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});