import Ember from 'ember';

let rentals = [{
    id: 'grand-old-mansion',
    title: 'Grand Old Mansion',
    owner: 'Veruca Salt',
    city: 'San Francisco',
    type: 'Estate',
    bedrooms: 15,
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
}, {
    id: 'urban-living',
    title: 'Urban Living',
    owner: 'Mike TV',
    city: 'Seattle',
    type: 'Condo',
    bedrooms: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
}, {
    id: 'downtown-charm',
    title: 'Downtown Charm',
    owner: 'Violet Beauregarde',
    city: 'Portland',
    type: 'Apartment',
    bedrooms: 3,
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
}];

export default Ember.Route.extend({
  model() {
    return rentals;
  }
});
