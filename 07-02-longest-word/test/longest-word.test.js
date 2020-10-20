var expect = chai.expect;

describe("longestWord", function() {
  it("should return 'Jumped' when given 'The Quick Brown Fox Jumped Over The Lazy Dog'", function() {
    var str = "The Quick Brown Fox Jumped Over The Lazy Dog";

    var result = longestWord(str);

    expect(result).to.eql("Jumped");
  });

  it("should return 'Remembers' when given 'The North Remembers'", function() {
    var str = "The North Remembers";

    var result = longestWord(str);

    expect(result).to.eql("Remembers");
  });

  it("should return 'otorhinolaryngology' when given 'What if we try a super-long word such as otorhinolaryngology'", function() {
    var str = "What if we try a super-long word such as otorhinolaryngology";

    var result = longestWord(str);

    expect(result).to.eql("otorhinolaryngology");
  });

  it("should return 'airspeed' or 'velocity' when given 'What is the average airspeed velocity of an unladen swallow'", function() {
    var str = "What is the average airspeed velocity of an unladen swallow";

    var result = longestWord(str);

    expect(result).to.eql("airspeed" || "velocity");
  });

});
