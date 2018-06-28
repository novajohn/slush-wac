import {<%= className %>Controller} from './<%= moduleNameSlug %>.controller'

export const <%= className %>Component = {
    templateUrl: require('./<%= moduleNameSlug %>.view.html')(),
    controller:  <%= className %>Controller
}