# Portfolio — deployment guide

## 1. Before you push: fill in the placeholders

Search the files for these and replace them with your real info:

| Placeholder | Where | Replace with |
|---|---|---|
| `you@example.com` | index.html (hero + contact) | your real email |
| `yourusername` (GitHub link) | index.html | your GitHub username |
| `yourusername` (LinkedIn link) | index.html | your LinkedIn slug |
| `resume.pdf` | index.html download button | add an actual `resume.pdf` file to this folder |
| `[add year]` | Education timeline item | your BCA start–end years |
| `[Fill in...]` fields in Findings | project detail sections | your real write-ups once each project is done |
| `RM` initials photo | hero section | replace with a real photo (see below) |

### Adding your photo
1. Add a photo file to this folder, e.g. `assets/profile.jpg` (create an `assets` folder).
2. In `index.html`, find the `target-photo` div and replace:
   ```html
   <span class="target-initials">RM</span>
   ```
   with:
   ```html
   <img src="assets/profile.jpg" alt="Rohan Mate">
   ```

## 2. Push to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
```

Create a new repo on GitHub (github.com/new). Two naming options:

- **`yourusername.github.io`** — deploys automatically at `https://yourusername.github.io`
- **Any other name** (e.g. `portfolio`) — deploys at `https://yourusername.github.io/portfolio`, and you must enable Pages manually (step 3)

Then connect and push:

```bash
git remote add origin https://github.com/yourusername/REPO_NAME.git
git branch -M main
git push -u origin main
```

## 3. Enable GitHub Pages

If you didn't use the `username.github.io` naming:

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Source**, select branch `main`, folder `/ (root)`
3. Save. GitHub gives you a live URL within a minute or two.

## 4. Every future update

```bash
git add .
git commit -m "describe what you changed"
git push
```

Site updates automatically within a minute of pushing.

## 5. Security basics (from our earlier conversation)

- Turn on 2FA on your GitHub account — this is your single most important control here.
- If you add a custom domain later, turn on 2FA on your domain registrar account too.
- Keep this site static (no login system, no backend). You don't need one, and adding one only adds attack surface for no benefit.
