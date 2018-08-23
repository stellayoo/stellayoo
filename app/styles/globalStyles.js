import { injectGlobal } from 'styled-components'

import normalize from 'ruucm-blocks/libs/normalize'

// import NanumSquare from 'ruucm-blocks/css-patterns/fonts/NanumSquare'
// import Montserrat from 'ruucm-blocks/css-patterns/fonts/Montserrat'
// import NanumMyeongjo from 'ruucm-blocks/css-patterns/fonts/NanumMyeongjo'
import FuturaPTWeb from 'ruucm-blocks/css-patterns/fonts/FuturaPTWeb'
import Omnes from 'ruucm-blocks/css-patterns/fonts/Omnes'

import appStyle from './pageStyles'

// App Styles
injectGlobal`
  ${normalize}
  /* Fonts */
  ${FuturaPTWeb}
  ${Omnes}
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans|Roboto" rel="stylesheet');
  /* Icons */
  /* Body Styles */
  body {

  }
  ${appStyle}
`
