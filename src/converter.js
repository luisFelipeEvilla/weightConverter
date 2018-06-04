$(document).ready(function(){
    $('select').formSelect();
    $('button').on('click', ()=> {
      let unit1 = $('#unit1').val();
      let unit2 = $('#unit2').val();
      let measure1 = $('#measure1').val();
      let measure2 = $('#measure2').val();

      if(unit1 == "0" && unit2 == "0" ) $('#measure2').val(measure1)
      if(unit1 == "0" && unit2 == "1" ) $('#measure2').val(gramToLb(measure1))
      if(unit1 == "0" && unit2 == "2" ) $('#measure2').val(gramToKg(measure1))
      if(unit1 == "0" && unit2 == "3" ) $('#measure2').val(gramToTn(measure1))

      if(unit1 == "1" && unit2 == "0" ) $('#measure2').val(lbToGram(measure1))
      if(unit1 == "1" && unit2 == "1" ) $('#measure2').val(measure1)
      if(unit1 == "1" && unit2 == "2" ) $('#measure2').val(lbToKg(measure1))
      if(unit1 == "1" && unit2 == "3" ) $('#measure2').val(lbToTn(measure1))

      if(unit1 == "2" && unit2 == "0" ) $('#measure2').val(kgToGram(measure1))
      if(unit1 == "2" && unit2 == "1" ) $('#measure2').val(kgToLb(measure1))
      if(unit1 == "2" && unit2 == "2" ) $('#measure2').val(measure1)
      if(unit1 == "2" && unit2 == "3" ) $('#measure2').val(kgToTn(measure1))

      if(unit1 == "3" && unit2 == "0" ) $('#measure2').val(tnToGram(measure1))
      if(unit1 == "3" && unit2 == "1" ) $('#measure2').val(tnToLb(measure1))
      if(unit1 == "3" && unit2 == "2" ) $('#measure2').val(tnToKg(measure1))
      if(unit1 == "3" && unit2 == "3" ) $('#measure2').val(measure1)

    })

    const gramToLb = (quantity) => quantity/453.592
    const gramToKg = (quantity) => quantity/1000
    const gramToTn = (quantity) => quantity/1000000

    const lbToGram = (quantity) => quantity * 453.592
    const lbToKg = (quantity) => quantity * 0.453592
    const lbToTn = (quantity) => quantity * 0.000453592

    const kgToGram = (quantity) => quantity * 1000
    const kgToLb = (quantity) => quantity * 2.20462
    const kgToTn = (quantity) => quantity * 0.001

    const tnToGram = (quantity) => quantity * 1000000
    const tnToLb = (quantity) => quantity * 2204.62
    const tnToKg = (quantity) => quantity * 1000


  });
