Browser-Sync path bug
=====================

    npm install
    npm run serve

Open browser to `localhost:3000`, observe that it hangs for a very long time (minutes). If the directory inside of `/public/assets/images/seo/` is changed to something with only a few characters, there is no hang. (Warning, you may have to kill node in between runs, or at least pay attention to what port it's currently serving on).

* OS: Mac 10.12.2
* Node: 6.9.1
* NPM: 3.10.8
