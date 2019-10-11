<h5 align="center"><img src="demo.gif" /></h5>

<p align="center">
  <b><a align="center" href="https://react-clap-button.netlify.com/">See demo</a></b>
  </br>
  </br>
</p>

![Last version](https://img.shields.io/github/tag/Kikobeats/react-clap-button.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/react-clap-button/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/react-clap-button)
[![Dependency status](https://img.shields.io/david/Kikobeats/react-clap-button.svg?style=flat-square)](https://david-dm.org/Kikobeats/react-clap-button)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/react-clap-button.svg?style=flat-square)](https://david-dm.org/Kikobeats/react-clap-button#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/react-clap-button.svg?style=flat-square)](https://www.npmjs.org/package/react-clap-button)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> A Medium like clap button. Based on [Ohans Emmanuel](https://codepen.io/ohansemmanuel/full/zEJpYy/) CodePen, icon by [Luis Durazo](https://thenounproject.com/luisdurazo/).

## Install

```bash
$ npm install react-clap-button --save
```

## Usage

```
import React from 'react';
import ClapButton from 'react-clap-button';

export default () => {

    const onCountChange = ({ count, countTotal }) => {

    };
    // All Props are Optional
    return (
        <ClapButton
            count={0}
            countTotal={0}
            maxCount={50}
            isClicked={false}
            onCountChange={onCountChange}
            iconComponent={props => <CustomIcon {...props} size={38} />
        />
    );
}
```

## Related

- [vue-clap-button](https://github.com/AJLoveChina/vue-clap-button) – A Medium like clap button written on Vue.js

## License

**react-clap-button** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/react-clap-button/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/react-clap-button/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [@Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
