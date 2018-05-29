// Code your solution in this file!

driver = [
  {name: "frank", hometown: "chicago", revenue: 2000},
  {name: "bob", hometown: "frankfurt", revenue: 2500}
]

function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, town){
  drivers.forEach(function(driver){
    if(driver.hometown === town){
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers){
  return drivers.sort()
  
}
