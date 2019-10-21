# Prevalos
Automatically login to [HaloWaypoint](https://www.halowaypoint.com/en-us) and collect the daily login REQ pack. Powered by [Taiko](https://taiko.gauge.org/).

The project is named after [Knight Prevalos](http://halo.wikia.com/wiki/Prevalos), a Halo 5 Warzone boss.

![REQ Pack Gif](https://github.com/Brodan/prevalos/blob/master/reqpack.gif)

## Usage
```
$ git clone https://github.com/Brodan/prevalos.git
$ cd prevalos/
$ npm install
$ export XBOX_LOGIN_EMAIL="XXXXXXXXXXXX@live.com"
$ export XBOX_LOGIN_PASSWORD="YYYYYYYYYYYY"
$ npm start
# Use '$ npm start -- --observe' to see it live in a browser
```

Use a scheduler such as cron for daily execution. For example, to run every day at midnight, add the following to your crontab:
`0 0 * * * npm start --prefix /path/to/prevalos`

## Deploy To Heroku
Alternatively, you can use Heroku and the [Heroku Scheduler](https://elements.heroku.com/addons/scheduler) to deploy it and forget about it:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## To-Do
- [ ] Add logging.
- [ ] Validate email address before running.
- [ ] Open REQ pack and log contents.

## Maintainers
[@Brodan](https://github.com/Brodan).

## Contribute
Pull requests welcome, or [submit an issue])https://github.com/Brodan/prevalos/issues/new).

## License
[MIT © Christopher Hranj.](./LICENSE)

## Donate
<a href='https://ko-fi.com/A71814ZL' target='_blank'><img height='36' src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
