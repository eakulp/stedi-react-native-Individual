import hello from "../utils/helloEymi.js";

it("Should say Eymi",() =>{
    const helloString=hello();
    console.log(helloString);

    expect(helloString).toBe("Eymi");
})