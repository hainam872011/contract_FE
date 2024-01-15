state.customers = [
  {
    id: 111,
    address: {
      country: 'USA',
      state: 'West Virginia',
      city: 'Parkersburg',
      street: '2849 Fulton Street'
    },
    avatarUrl: '/static/images/avatars/avatar_3.png',
    createdAt: 1555016400000,
    email: 'ekaterina.tankova@devias.io',
    name: 'Ekaterina Tankova',
    phone: '304-428-3097'
  },
  {
    id: 111,
    address: {
      country: 'USA',
      state: 'Bristow',
      city: 'Iowa',
      street: '1865  Pleasant Hill Road'
    },
    avatarUrl: '/static/images/avatars/avatar_4.png',
    createdAt: 1555016400000,
    email: 'cao.yu@devias.io',
    name: 'Cao Yu',
    phone: '712-351-5711'
  },
  {
    id: 111,
    address: {
      country: 'USA',
      state: 'Georgia',
      city: 'Atlanta',
      street: '4894  Lakeland Park Drive'
    },
    avatarUrl: '/static/images/avatars/avatar_2.png',
    createdAt: 1555016400000,
    email: 'alexa.richardson@devias.io',
    name: 'Alexa Richardson',
    phone: '770-635-2682'
  },
  {
    id: 111,
    address: {
      country: 'USA',
      state: 'Ohio',
      city: 'Dover',
      street: '4158  Hedge Street'
    },
    avatarUrl: '/static/images/avatars/avatar_5.png',
    createdAt: 1554930000000,
    email: 'anje.keizer@devias.io',
    name: 'Anje Keizer',
    phone: '908-691-3242'
  },
  {
    id: 111,
    address: {
      country: 'USA',
      state: 'Texas',
      city: 'Dallas',
      street: '75247'
    },
    avatarUrl: '/static/images/avatars/avatar_6.png',
    createdAt: 1554757200000,
    email: 'clarke.gillebert@devias.io',
    name: 'Clarke Gillebert',
    phone: '972-333-4106'
  },
  {
    id: 111,
    address: {
      country: 'USA',
      state: 'California',
      city: 'Bakerfield',
      street: '317 Angus Road'
    },
    avatarUrl: '/static/images/avatars/avatar_1.png',
    createdAt: 1554670800000,
    email: 'adam.denisov@devias.io',
    name: 'Adam Denisov',
    phone: '858-602-3409'
  },
  {
    id: 111,
    address: {
      country: 'USA',
      state: 'California',
      city: 'Redondo Beach',
      street: '2188  Armbrester Drive'
    },
    avatarUrl: '/static/images/avatars/avatar_7.png',
    createdAt: 1554325200000,
    email: 'ava.gregoraci@devias.io',
    name: 'Ava Gregoraci',
    phone: '415-907-2647'
  },
  {
    id: 111,
    address: {
      country: 'USA',
      state: 'Nevada',
      city: 'Las Vegas',
      street: '1798  Hickory Ridge Drive'
    },
    avatarUrl: '/static/images/avatars/avatar_8.png',
    createdAt: 1523048400000,
    email: 'emilee.simchenko@devias.io',
    name: 'Emilee Simchenko',
    phone: '702-661-1654'
  },
  {
    id: 111,
    address: {
      country: 'USA',
      state: 'Michigan',
      city: 'Detroit',
      street: '3934  Wildrose Lane'
    },
    avatarUrl: '/static/images/avatars/avatar_9.png',
    createdAt: 1554702800000,
    email: 'kwak.seong.min@devias.io',
    name: 'Kwak Seong-Min',
    phone: '313-812-8947'
  },
  {
    id: 111,
    address: {
      country: 'USA',
      state: 'Utah',
      city: 'Salt Lake City',
      street: '368 Lamberts Branch Road'
    },
    avatarUrl: '/static/images/avatars/avatar_10.png',
    createdAt: 1522702800000,
    email: 'merrile.burgett@devias.io',
    name: 'Merrile Burgett',
    phone: '801-301-7894'
  }
];

Sandbox.define('/rest/customer', 'OPTIONS', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
});

Sandbox.define('/rest/customer', 'GET', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(state.customers);
});

Sandbox.define('/rest/customer', 'POST', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  var newCustomer = req.body;
  if (!state.customers.length) {
    newCustomer.id = 1;
  } else {
    var lastCustomer = state.customers[state.customers.length - 1];
    var newId = lastCustomer.id + 1;
    newCustomer.id = newId;
  }

  state.customers.push(newCustomer);

  res.send(newCustomer);
});

Sandbox.define('/rest/customer/{id}', 'PUT', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  var customerId = parseInt(req.params.id);
  var newList = state.customers.map(function (customer) {
    if (customer.id !== customerId) return customer;
    var newCustomer = req.body;
    newCustomer.id = customerId;

    return req.body;
  });

  state.customers = newList;

  res.send(newList);
});

Sandbox.define('/rest/customer/{id}', 'OPTIONS', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
});

Sandbox.define('/rest/customer/{id}', 'GET', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');

  var list = state.customers;
  var selectedCustomer = list.filter(function (customer) {
    return customer.id === parseInt(req.params.id);
  });

  res.send(selectedCustomer[0]);
});

Sandbox.define('/rest/customer/{id}', 'DELETE', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  var newList = state.customers.filter(function (customer) {
    return customer.id !== parseInt(req.params.id);
  });

  state.customers = newList;

  res.send('Success');
});
