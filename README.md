![Publish Status](https://github.com/ether/ep_show_whitespace/workflows/Node.js%20Package/badge.svg) [![Backend Tests Status](https://github.com/ether/ep_show_whitespace/actions/workflows/test-and-release.yml/badge.svg)](https://github.com/ether/ep_show_whitespace/actions/workflows/test-and-release.yml)

Shows trailing whitespace on a line within Etherpad 

# License

Apache 2

## Installation

Install from the Etherpad admin UI (**Admin → Manage Plugins**,
search for `ep_show_whitespace` and click *Install*), or from the Etherpad
root directory:

```sh
pnpm run plugins install ep_show_whitespace
```

> ⚠️ Don't run `npm i` / `npm install` yourself from the Etherpad
> source tree — Etherpad tracks installed plugins through its own
> plugin-manager, and hand-editing `package.json` can leave the
> server unable to start.

After installing, restart Etherpad.
