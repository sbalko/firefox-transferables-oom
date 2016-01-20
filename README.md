# firefox-transferables-oom

This small example project does provoke the OOM issue in Firefox. In order to run it, first do an:

```
sudo npm install -g gulp
```

in order to install the `gulp` build tool globally (if you don't have it there already). Then cd into the `firefox-transferables-oom` directory and run:

```
npm init
```

to install the dependencies. Finally, launch a local webserver (port 9000) that hosts the example code by typing in:

```
gulp webserver
```

Then open a new Firefox tab, open the development tools panel and go to `http://localhost:9000`.

The code will spawn a worker and bounce some messages to the worker and back, where each message contains a moderately sized `ArrayBuffer` (32MB). After a few bounces, Firefox will throw an OOM exception, whereas all other workers will indefinitely bounce the `ArrayBuffer` back and forth.
