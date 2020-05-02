import room1 from "./Images/img13.jpg";
import room2 from "./Images/img14.jpg";
import room3 from "./Images/img15.jpg";
import room4 from "./Images/img16.jpg";
import img1 from "./Images/img5.jpg";
import img2 from "./Images/img6.jpg";
import img3 from "./Images/img7.jpg";
import img4 from "./Images/img8.jpg";
import img5 from "./Images/img9.jpg";
import img6 from "./Images/img10.jpg";
import img7 from "./Images/img11.jpg";
import img8 from "./Images/img12.jpg";
import img9 from "./Images/img13.jpg";
import img10 from "./Images/img14.jpg";
import img11 from "./Images/img15.jpg";
import img12 from "./Images/img16.jpg";
import img13 from "./Images/img17.jpg";
import img14 from "./Images/img18.jpg";
import img15 from "./Images/img19.jpg";
import img16 from "./Images/img20.jpg";
import img17 from "./Images/img21.jpg";
import img18 from "./Images/img22.jpg";

export default [
    {
        sys:{
            id: "1"
        },
        fields: {
            name: "single economy",
            slug: "single-economy",
            type: "single",
            price: 100,
            size: 200,
            capacity: 1,
            pets: false,
            breakfast: false,
            featured: false,
            description:
              "Street art edison bulb gluten-free,tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level,deep vart party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo,street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice sartorial before they sold out pok pok health goth trust fund cray.",
              extras: [
                  "Plush pillows and breathable bed linens",
                  "Soft, oversized bath towels",
                  "Full-sized, ph-balanced toiletries",
                  "Complimentary refreshments",
                  "Adequate safety/security",
                  "Internet",
                  "Comfortable beds"
              ],
              images: [
                  {
                      fields: {
                          file: {
                              url:room1
                          }
                      }
                  },
                  {
                      fields: {
                          file: {
                              url: room2
                          }
                      }
                  },
                  {
                      fields: {
                          file: {
                              url:room3
                          }
                      }
                  },
                  {
                      fields: {
                          file: {
                              url:room4
                          }
                      }
                  }
              ]
        }
    },
    {
        sys: {
            id: "2"
        },
        fields: {
            name: "single basic",
            slug: "single-basic",
            type: "single",
            price: "150",
            size: 250,
            capacity: 1,
            pets: false,
            breakfast: false,
            featured: false,
            description:
            "Street art edison bulb gluten-free,tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep vart party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial before they sold out pok pok health goth trush fund cray.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, ph-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: img2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: room2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: room3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: room4
                        }
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "3"
        },
        fields: {
            name: "single standard",
            slug: "single-standard",
            type: "single",
            price: 250,
            size: 300,
            capacity: 1,
            pets:true,
            breakfast: false,
            featured:false,
            description:
               "Street art edison bulb gluten-free, tofu try-hard lumbersexual brookln tattooed pickled chambray.Actually humblebrag next level,deep vart party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile chiche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold"
        }
    }
]