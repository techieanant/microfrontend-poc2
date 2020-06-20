POC application which uses micro frontend architecture and webpack module federation to lazy load two different SPAs into a host application.

Install and Run:  `yarn && yarn start`

# Notes

- There are 3 appliction packages, a host app and two children apps. 
- All 3 applictions have their own dependencies but share react, react-dom, react-router-dom
- 100% client side
