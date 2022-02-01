const path = require('path')
    
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "_colors.scss";
                  @import "_extends.scss";
                  @import "_fonts.scss";
                  @import "_mixins.scss";
                  @import "_variables.scss";`
  }
}
