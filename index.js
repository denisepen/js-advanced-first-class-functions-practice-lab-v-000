// Code your solution in this file!

const driver = [
  {name: "elliot", hometown: "paris", revenue: 8500},
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
  return driverArray = [...drivers].sort(newArray)
}

const newArray = function(a,b){
  return a.revenue - b.revenue
}
function driversByName(drivers){

  return driverArray = [...drivers].sort(function(a,b){
    return return (a).localeCompare(b)
  })
}
