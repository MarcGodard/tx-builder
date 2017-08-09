module.exports = {
  hex: '0100000001545f6161d2be3bdfe7184ee1f72123c3918738da8b97f11e23acdd34059f7a2d010000006b4830450221008c33d765ae16cfa3cc653c5c039d58131fbbdf76266af7a76910fc1ba39de0b8022048ae83fc9b82f62b816641158dd1cfd398d2c56d5f6f812c9fa588947311d8400121033701fc7f242ae2dd63a18753518b6d1425e53496878924b6c0dc08d800af46adffffffff0200e1f505000000001976a91461ca8116d03694952a3ad252d53c695da7d95f6188ac18ddf505000000001976a9145e9f5c8cc17ecaaea1b4e5a3d091ca0aed1342f788ac00000000',
  hexItems: {
    vin: '545f6161d2be3bdfe7184ee1f72123c3918738da8b97f11e23acdd34059f7a2d010000006b4830450221008c33d765ae16cfa3cc653c5c039d58131fbbdf76266af7a76910fc1ba39de0b8022048ae83fc9b82f62b816641158dd1cfd398d2c56d5f6f812c9fa588947311d8400121033701fc7f242ae2dd63a18753518b6d1425e53496878924b6c0dc08d800af46adffffffff',
    vout1: '00e1f505000000001976a91461ca8116d03694952a3ad252d53c695da7d95f6188ac',
  },
  decoded: {
    version: 1,
    locktime: 0,
    vin: [{
      hash: '2d7a9f0534ddac231ef1978bda388791c32321f7e14e18e7df3bbed261615f54',
      index: 1,
      script: '4830450221008c33d765ae16cfa3cc653c5c039d58131fbbdf76266af7a76910fc1ba39de0b8022048ae83fc9b82f62b816641158dd1cfd398d2c56d5f6f812c9fa588947311d8400121033701fc7f242ae2dd63a18753518b6d1425e53496878924b6c0dc08d800af46ad',
      sequence: '4294967295'
    }],
    vout: [{
      value: 100000000,
      script: '76a91461ca8116d03694952a3ad252d53c695da7d95f6188ac'
    }, {
      value: 99999000,
      script: '76a9145e9f5c8cc17ecaaea1b4e5a3d091ca0aed1342f788ac'
    }]
  },
  offsetVout1: 154
}

// Version:
// 01000000
//
// VIN length:
// 01
//
// Hash:
// 545f6161d2be3bdfe7184ee1f72123c3918738da8b97f11e23acdd34059f7a2d
//
// Index:
// 01000000
//
// Script length:
// 6b
//
// Script:
// 4830450221008c33d765
// ae16cfa3cc653c5c039d
// 58131fbbdf76266af7a7
// 6910fc1ba39de0b80220
// 48ae83fc9b82f62b8166
// 41158dd1cfd398d2c56d
// 5f6f812c9fa588947311
// d8400121033701fc7f24
// 2ae2dd63a18753518b6d
// 1425e53496878924b6c0
// dc08d800af46ad
//
// Sequence:
// ffffffff
//
// 0200e1f505000000001976a91461ca8116d03694952a3ad252d53c695da7d95f6188ac18ddf505000000001976a9145e9f5c8cc17ecaaea1b4e5a3d091ca0aed1342f788ac00000000
