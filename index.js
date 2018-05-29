// Code your solution in this file!

driver = [
  {name: "frank", hometown: "chicago"},
  {name: "bob", hometown: "frankfurt"}
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
