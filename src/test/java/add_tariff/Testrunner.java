package add_tariff;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith (Cucumber.class)
@CucumberOptions(features="C:\\Users\\Ashok 555\\eclipse-workspace\\bharath\\cucumber_tariff\\tariff\\src\\test\\resources\\features\\tariff.feature",glue ="org.add_tariff",plugin="html:target")

public class Testrunner {

}
