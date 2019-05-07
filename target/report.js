$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Ashok 555/eclipse-workspace/bharath/cucumber_tariff/tariff/src/test/resources/features/tariff.feature");
formatter.feature({
  "name": "telecom project",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "add tariff plan",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "make sure customer at telecom site",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click add tariff plan",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "enter the tariff details in  numeric values \"\u003crental1\u003e\",\"\u003clocal_minutes\u003e\",\"\u003cinter_minutes\u003e\",\"\u003csms_pack\u003e\",\"\u003cminutes_charges\u003e\",\"\u003cinter_charges\u003e\",\"\u003csms_charges\u003e\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click submit",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "check congratulation message display",
  "rows": [
    {
      "cells": [
        "rental1",
        "local_minutes",
        "inter_minutes",
        "sms_pack",
        "minutes_charges",
        "inter_charges",
        "sms_charges"
      ]
    },
    {
      "cells": [
        "123",
        "456",
        "678",
        "987",
        "856",
        "788",
        "5456"
      ]
    },
    {
      "cells": [
        "123",
        "456",
        "678",
        "987",
        "856",
        "788",
        "5446"
      ]
    },
    {
      "cells": [
        "123",
        "456",
        "678",
        "987",
        "856",
        "788",
        "655"
      ]
    },
    {
      "cells": [
        "123",
        "456",
        "678",
        "987",
        "856",
        "788",
        "5467"
      ]
    },
    {
      "cells": [
        "123",
        "456",
        "678",
        "987",
        "856",
        "788",
        "587"
      ]
    },
    {
      "cells": [
        "123",
        "456",
        "678",
        "987",
        "856",
        "788",
        "75"
      ]
    },
    {
      "cells": [
        "123",
        "456",
        "678",
        "987",
        "856",
        "788",
        "87"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});