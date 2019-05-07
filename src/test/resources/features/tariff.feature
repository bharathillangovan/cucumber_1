
Feature: telecom project
  I want to use this template for my feature file

 
  Scenario: add tariff plan
    Given make sure customer at telecom site
    And click add tariff plan
    When enter the tariff details in  numeric values "<rental1>","<local_minutes>","<inter_minutes>","<sms_pack>","<minutes_charges>","<inter_charges>","<sms_charges>"
    And click submit 
    
    Then check congratulation message display
   
  |rental1|local_minutes|inter_minutes|sms_pack|minutes_charges|inter_charges|sms_charges|
   |123|456|678|987|856|788|5456|
   |123|456|678|987|856|788|5446|
   |123|456|678|987|856|788|655|
   |123|456|678|987|856|788|5467|
   |123|456|678|987|856|788|587|
   |123|456|678|987|856|788|75|
   |123|456|678|987|856|788|87|
  