const { describe, it } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function () {
  it("check that Utils.calculateNumber was called once", function () {
    const spy = sinon.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(2350, 2452);

    assert(spy.withArgs("The total is: 10").calledOnce);
    assert(stub.withArgs("SUM", 100, 20).calledOnce);
  });
});
