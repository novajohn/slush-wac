import {<%= className %>Component} from './<%= moduleNameSlug %>.component'

import './{<%= moduleNameSlug %>}.styl'

export const <%= className %>Module = angular
    .module('<%= moduleDefName %>', [])
    .component('<%= serviceName %>', <%= className %>Component)
    .name