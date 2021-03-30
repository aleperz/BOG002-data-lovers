import { filterData, sortData } from "../src/data.js";
import data from "../src/data/rickandmorty/rickandmorty.js";

describe("filterData", () => {
  const datos = data.results;

  it("is a function", () => {
    expect(typeof filterData).toBe("function");
  });

  it("returns `data` for ` `", () => {
    expect(filterData(datos, "")).toBe(datos);
  });

  it("returns `6` for filterdata.length", () => {
    expect(filterData(datos, [["gender", "Genderless"]])).toHaveLength(6);
  });

  it("returns `4` for filterdata.length", () => {
    expect(
      filterData(datos, [
        ["gender", "Genderless"],
        ["status", "Alive"],
      ])
    ).toHaveLength(4);
  });
});

describe("sortData", () => {
  const datos = data.results;

  it("is a function", () => {
    expect(typeof sortData).toBe("function");
  });

  it("returns character in the position[0] for datos sortBy 'name' and ascendent", () => {
    expect(sortData(datos, "name", "ascendente")[0]).toEqual({
      id: 6,
      name: "Abadango Cluster Princess",
      status: "Alive",
      species: "Alien",
      type: "",
      gender: "Female",
      origin: {
        name: "Abadango",
        url: "https://rickandmortyapi.com/api/location/2",
      },
      location: {
        name: "Abadango",
        url: "https://rickandmortyapi.com/api/location/2",
      },
      image:
        "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/6.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/27"],
      url: "https://rickandmortyapi.com/api/character/6",
      created: "2017-11-04T19:50:28.250Z",
    });
  });

  it("returns character in the position[248] for datos sortBy 'name' and ascendent", () => {
    expect(sortData(datos, "name", "ascendente")[248]).toEqual({
      id: 213,
      name: "Magnesium-J",
      status: "Alive",
      species: "Alien",
      type: "Alphabetrian",
      gender: "Male",
      origin: {
        name: "Alphabetrium",
        url: "https://rickandmortyapi.com/api/location/43",
      },
      location: {
        name: "Alphabetrium",
        url: "https://rickandmortyapi.com/api/location/43",
      },
      image:
        "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/213.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/16"],
      url: "https://rickandmortyapi.com/api/character/213",
      created: "2017-12-30T14:21:16.121Z",
    });
  });
  it("returns character in the position[248] for datos sortBy 'name' and down", () => {
    expect(sortData(datos, "name", "descendente")[248]).toEqual({
      id: 210,
      name: "Lucy",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Female",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image:
        "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/210.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/11"],
      url: "https://rickandmortyapi.com/api/character/210",
      created: "2017-12-30T14:01:23.319Z",
    });
  });

  it("returns character in the position[492] for datos sortBy 'name' and down", () => {
    expect(sortData(datos, "name", "descendente")[492]).toEqual({
      id: 6,
      name: "Abadango Cluster Princess",
      status: "Alive",
      species: "Alien",
      type: "",
      gender: "Female",
      origin: {
        name: "Abadango",
        url: "https://rickandmortyapi.com/api/location/2",
      },
      location: {
        name: "Abadango",
        url: "https://rickandmortyapi.com/api/location/2",
      },
      image:
        "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/6.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/27"],
      url: "https://rickandmortyapi.com/api/character/6",
      created: "2017-11-04T19:50:28.250Z",
    });
  });
});
