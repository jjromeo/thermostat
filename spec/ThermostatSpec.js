describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  describe("Thermostat by default", function() {
    it('will be 20 degrees', function(){
      expect(thermostat.temperature).toEqual(20);
    });
    it('will have powersaving mode set to on', function(){
      expect(thermostat.powerSavingMode).toBe(true);
    })

  });

  describe('Temperature', function(){

    describe('when power saving mode is on', function(){



      it('should have a maximum temperature of 25', function(){
      thermostat.powerSavingMode = true
      expect(thermostat.maximumTemperature()).toEqual(25)
    })

      it('should not be able to increase above the maximum temperature', function(){
        thermostat.temperature = 25;
        thermostat.increaseTemperature()
        expect(thermostat.temperature).toEqual(25);
      })

  })

  describe('when power saving mode is off', function(){
    beforeEach(function() {
      thermostat.powerSavingMode = false
    })

    it('should have a maximum temperature of 32', function(){
      expect(thermostat.maximumTemperature()).toEqual(32)
      })

    it('should not be able to increase above the maximum temperature', function(){
      thermostat.temperature = 32;
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(32)
    })
  })

  describe('General Functionality', function(){

    it('should be able to increase', function(){
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21)
    });

    it('should be able to decrease', function(){
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19)
    });

    it('should not be able to drop below 10 degrees', function(){
      thermostat.temperature = 10;
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(10)
    })

    it('should be able to reset to 20 degrees', function(){
      thermostat.temperature = 22;
      thermostat.resetThermostat();
      expect(thermostat.temperature).toEqual(20)
    })

    it('should be able to reset to powersaving mode: on', function(){
      thermostat.powerSavingMode = false;
      thermostat.resetThermostat();
      expect(thermostat.powerSavingMode).toBe(true)
    })



  })

  describe('The thermostat should have an energy rating', function(){
    
    it('of efficient if the temperature is less than 18 degrees', function(){
      thermostat.temperature = 17;
      expect(thermostat.energyRating()).toEqual('efficient');
    })

    it('of average if the temperature is less than 18 degrees', function(){
      expect(thermostat.energyRating()).toEqual('average');
    })

    it('of environmental tragedy if the temperature is 25 degrees or above', function(){
      thermostat.temperature = 25;
      expect(thermostat.energyRating()).toEqual('inefficient');
    })

  })


  });





});
