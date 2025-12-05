export interface Shop {
    name: string;
    tag: string;
    desc: string;
    mapLink: string;
  }
  
  export interface LocationData {
    id: string;
    label: string;
    mapEmbedUrl: string;
    shops: Shop[];
  }
  
  export const shoppingData: LocationData[] = [
    {
      id: "hsr-layout",
      label: "HSR Layout",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15555.985950244686!2d77.63216964348677!3d12.907973092246765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sclothing%20stores%20hsr%20layout!5e0!3m2!1sen!2sin!4v1709667000000!5m2!1sen!2sin",
      shops: [
        { 
          name: "Branded Apparels & Co", 
          tag: "Surplus", 
          desc: "Top Pick. Huge stock of branded surplus shirts, chinos, and denim. Expect 60-70% off on brands like US Polo and Levis.", 
          mapLink: "https://www.google.com/maps/search/Branded+Apparels+%26+Co+HSR+Layout" 
        },
        { 
          name: "World of Brands (WoB)", 
          tag: "Winter Wear", 
          desc: "Massive warehouse-style store. Best for heavy winter jackets, hoodies, sweatshirts, and zippers.", 
          mapLink: "https://www.google.com/maps/search/World+of+Brands+HSR+Layout" 
        },
        { 
          name: "Classic Export Surplus", 
          tag: "Budget", 
          desc: "Basement store hidden gem. Great for daily wear t-shirts, track pants, and shorts under ₹400.", 
          mapLink: "https://www.google.com/maps/search/Classic+Export+Surplus+HSR+Layout" 
        },
        { 
          name: "Brand O Brands", 
          tag: "Denim", 
          desc: "Specializes in denim and rugged wear. Good collection of jeans, denim jackets, and cargo pants.", 
          mapLink: "https://www.google.com/maps/search/Brand+O+Brands+HSR+Layout" 
        },
        { 
          name: "Hip Hopz Brand Factory", 
          tag: "Streetwear", 
          desc: "Trendy oversized tees, baggy cargo pants, and funky prints perfect for the gen-z aesthetic.", 
          mapLink: "https://www.google.com/maps/search/Hip+Hopz+Brand+Factory+HSR+Layout" 
        },
        { 
          name: "Zudio", 
          tag: "Basics", 
          desc: "Unbeatable for basics. Plain oversized tees (₹299), sliders (₹199), and affordable activewear.", 
          mapLink: "https://www.google.com/maps/search/Zudio+HSR+Layout" 
        },
        { 
          name: "Fashion Factory", 
          tag: "Outlet", 
          desc: "Large multi-brand outlet. Often has clearance sales on ethnic wear and winter jackets.", 
          mapLink: "https://www.google.com/maps/search/Fashion+Factory+HSR+Layout" 
        },
        { 
          name: "Just Casuals", 
          tag: "Workwear", 
          desc: "Excellent collection of formal shirts, linen trousers, and office-friendly chinos at factory rates.", 
          mapLink: "https://www.google.com/maps/search/Just+Casuals+HSR+Layout" 
        },
        { 
          name: "Style Union", 
          tag: "Trendy", 
          desc: "Modern aesthetic store. Good for layered outfits, flannels, and baggy jeans at mid-range prices.", 
          mapLink: "https://www.google.com/maps/search/Style+Union+HSR+Layout" 
        },
        { 
          name: "OWND!", 
          tag: "Pre-Loved", 
          desc: "Curated mix of pre-loved and surplus items. You can find unique vintage pieces if you dig.", 
          mapLink: "https://www.google.com/maps/search/OWND!+HSR+Layout" 
        },
        { 
          name: "Wonderkraftz Warehouse", 
          tag: "Bulk", 
          desc: "Wholesale vibe. Best for buying basic tees and socks in bulk for very cheap.", 
          mapLink: "https://www.google.com/maps/search/Wonderkraftz+warehouse+HSR+Layout" 
        },
        { 
          name: "Snitch", 
          tag: "Premium", 
          desc: "Slightly pricier (₹1k-2k) but the best place for high-quality baggy cargos and korean-style pants.", 
          mapLink: "https://www.google.com/maps/search/Snitch+HSR+Layout" 
        },
        { 
          name: "Club Jersey Store", 
          tag: "Sports", 
          desc: "Hidden gem for football fans. Cheap rejected jerseys, kits, and track pants.", 
          mapLink: "https://www.google.com/maps/search/Club+Jersey+Store+HSR+Layout" 
        },
        { 
          name: "The Linen Collection", 
          tag: "Fabrics", 
          desc: "Factory outlet rates for pure linen fabrics, trousers, and shirts. 'Old Money' aesthetic on a budget.", 
          mapLink: "https://www.google.com/maps/search/The+Linen+Collection+HSR+Layout" 
        },
        { 
          name: "Hifi Branded Surplus", 
          tag: "Graphic Tees", 
          desc: "Small shop but often stocks export rejected graphic tees and hoodies for very cheap.", 
          mapLink: "https://www.google.com/maps/search/Hifi+Branded+Surplus+HSR+Layout" 
        }
      ]
    },
    {
      id: "jpnagar",
      label: "JP Nagar",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15556.326237699997!2d77.5976722!3d12.9025266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sclothing%20stores%20jp%20nagar!5e0!3m2!1sen!2sin!4v1709667000000!5m2!1sen!2sin",
      shops: [
        { 
          name: "Texs Mart", 
          tag: "Mega Warehouse", 
          desc: "Huge department store. Innerwear, towels, bedsheets, jackets, and daily wear at rock-bottom prices.", 
          mapLink: "https://www.google.com/maps/search/Texs+Mart+JP+Nagar" 
        },
        { 
          name: "Bengaluru Brand Warehouse", 
          tag: "Surplus", 
          desc: "Premium surplus family store. Reliable for men's branded shirts and footwear.", 
          mapLink: "https://www.google.com/maps/search/Bengaluru+Brand+Warehouse+JP+Nagar" 
        },
        { 
          name: "Escape Closet", 
          tag: "Aesthetic Thrift", 
          desc: "Hidden gem for aesthetic finds. Vintage jackets, corsets, baggy denim, and unique prints.", 
          mapLink: "https://www.google.com/maps/search/Escape+Closet+JP+Nagar" 
        },
        { 
          name: "Roboskin Jackets", 
          tag: "Leather", 
          desc: "Specialist in leather. Best place in JP Nagar for affordable leather jackets and custom repairs.", 
          mapLink: "https://www.google.com/maps/search/Roboskin+Jackets+JP+Nagar" 
        },
        { 
          name: "Adidas Factory Outlet", 
          tag: "Sport", 
          desc: "JP Nagar Phase 3. Older stock sneakers and jerseys at 40-60% flat discount.", 
          mapLink: "https://maps.google.com/?cid=9283403999006168292&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ7" 
        },
        { 
          name: "Nike Factory Store", 
          tag: "Sport", 
          desc: "Near Delmia Circle. Authentic running shoes and gym wear at clearance rates.", 
          mapLink: "https://maps.google.com/?cid=9283403999006168292&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ8" 
        },
        { 
          name: "Puma Factory Outlet", 
          tag: "Sport", 
          desc: "Good for motorsport editions and casual sneakers on heavy discount.", 
          mapLink: "https://maps.google.com/?cid=9283403999006168292&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ9" 
        },
        { 
          name: "HiFi Surplus", 
          tag: "Casuals", 
          desc: "Good for graphic tees, shorts, and pyjamas. Budget-friendly.", 
          mapLink: "https://www.google.com/maps/search/Hifi+Surplus+JP+Nagar" 
        },
        { 
          name: "Allen Solly Factory Outlet", 
          tag: "Formal", 
          desc: "Best for office wear. Friday dressing shirts and trousers at factory prices.", 
          mapLink: "https://maps.google.com/?cid=1699538691896280187&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ0" 
        },
        { 
          name: "Louis Philippe Outlet", 
          tag: "Formal", 
          desc: "Suits, blazers, and formal shoes. Check the 'Buy 2 Get 2' racks.", 
          mapLink: "https://maps.google.com/?cid=1699538691896280187&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ1" 
        },
        { 
          name: "Van Heusen Factory Outlet", 
          tag: "Formal/Party", 
          desc: "Great for party wear shirts and blazers. Located in the outlet cluster.", 
          mapLink: "https://maps.google.com/?cid=1699538691896280187&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ2" 
        },
        { 
          name: "Arrow Factory Outlet", 
          tag: "Classic", 
          desc: "American classic styles. Good for stiff collar shirts and trousers.", 
          mapLink: "https://maps.google.com/?cid=1699538691896280187&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ3" 
        },
        { 
          name: "US Polo Assn Outlet", 
          tag: "Casuals", 
          desc: "Polos, jeans, and casual shirts. Usually has a flat 40% off section.", 
          mapLink: "https://maps.google.com/?cid=1699538691896280187&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ4" 
        },
        { 
          name: "Levis Factory Outlet", 
          tag: "Denim", 
          desc: "Classic denim store. Look for the 'Irregulars' shelf for massive discounts.", 
          mapLink: "https://maps.google.com/?cid=1699538691896280187&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ5" 
        },
        { 
          name: "Skechers Outlet", 
          tag: "Shoes", 
          desc: "Walking and running shoes. Comfortable footwear at slashed prices.", 
          mapLink: "https://maps.google.com/?cid=1699538691896280187&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ6" 
        },
        { 
          name: "Woodland Factory Outlet", 
          tag: "Rugged", 
          desc: "Heavy duty boots, leather jackets, and outdoor gear.", 
          mapLink: "https://maps.google.com/?cid=1699538691896280187&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ7" 
        },
        { 
          name: "Jockey Factory Outlet", 
          tag: "Innerwear", 
          desc: "Innerwear and activewear seconds. Good for stocking up on essentials.", 
          mapLink: "https://maps.google.com/?cid=1699538691896280187&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ8" 
        },
        { 
          name: "Go Colors Outlet", 
          tag: "Women", 
          desc: "Leggings and pants in every color. Clearance stock available.", 
          mapLink: "https://maps.google.com/?cid=1699538691896280187&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ9" 
        },
        { 
          name: "Biba Factory Outlet", 
          tag: "Ethnic", 
          desc: "Kurtas and sets. Great for buying occasion wear on a budget.", 
          mapLink: "https://maps.google.com/?cid=13103484684408623786&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ0" 
        },
        { 
          name: "W for Woman Outlet", 
          tag: "Ethnic", 
          desc: "Modern ethnic wear. Good prints and cuts at discounted rates.", 
          mapLink: "https://maps.google.com/?cid=13103484684408623786&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ1" 
        },
        { 
          name: "Brand Mandi", 
          tag: "Stocklots", 
          desc: "Mixed brand surplus. You need to dig, but you can find Zara/H&M tags sometimes.", 
          mapLink: "https://maps.google.com/?cid=13103484684408623786&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ2" 
        },
        { 
          name: "Pepe Jeans Outlet", 
          tag: "Denim", 
          desc: "Trendy denim and casual shirts. Good fits for younger crowds.", 
          mapLink: "https://maps.google.com/?cid=13103484684408623786&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ3" 
        },
        { 
          name: "Flying Machine Outlet", 
          tag: "Youth", 
          desc: "Rugged jeans and graphic tees. Very affordable sales.", 
          mapLink: "https://maps.google.com/?cid=13103484684408623786&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ4" 
        },
        { 
          name: "Unlimited", 
          tag: "Family", 
          desc: "Large format value fashion store. Good for basics and daily wear.", 
          mapLink: "https://maps.google.com/?cid=13103484684408623786&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ5" 
        },
        { 
          name: "Zudio (JP Nagar)", 
          tag: "Basics", 
          desc: "The standard for cheap, trendy fast fashion. New stock every Friday.", 
          mapLink: "https://maps.google.com/?cid=13103484684408623786&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ6" 
        }
      ]
    },
    {
      id: "btm",
      label: "BTM Layout",
      mapEmbedUrl: "https://maps.google.com/?cid=13103484684408623786&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ7",
      shops: [
        { 
          name: "Branded Hub", 
          tag: "Wholesale", 
          desc: "Wholesale & retail surplus. Excellent for men's clothing and shoes.", 
          mapLink: "https://www.google.com/maps/search/Branded+Hub+BTM+Layout" 
        },
        { 
          name: "Farm Boy", 
          tag: "Casuals", 
          desc: "Near BTM Lake. Good for daily wear shorts, tees, and gym wear.", 
          mapLink: "https://www.google.com/maps/search/Farm+Boy+Koramangala" 
        },
        { 
          name: "Brand Ware House", 
          tag: "Jeans", 
          desc: "Consistent quality for surplus jeans, denim shirts, and casuals.", 
          mapLink: "https://www.google.com/maps/search/Brand+Ware+House+BTM" 
        },
        { 
          name: "The Deal Store", 
          tag: "Tees", 
          desc: "Specific surplus store known for a wide variety of branded t-shirts.", 
          mapLink: "https://www.google.com/maps/search/The+Deal+Store+BTM+Layout" 
        },
        { 
          name: "S K Fashion", 
          tag: "Daily", 
          desc: "Budget-friendly daily wear store. Good for rough use clothes.", 
          mapLink: "https://www.google.com/maps/search/S+K+Fashion+BTM+Layout" 
        },
        { 
          name: "Rachaita", 
          tag: "Tailor/Fabric", 
          desc: "Good spot for fabrics if you want to stitch your own baggy pants or custom fits.", 
          mapLink: "https://www.google.com/maps/search/Rachaita+BTM+Layout" 
        },
        { 
          name: "Men's Collections", 
          tag: "Formals", 
          desc: "Dedicated store for men's formal trousers and shirts at affordable rates.", 
          mapLink: "https://www.google.com/maps/search/Men's+Collections+BTM" 
        },
        { 
          name: "Trends (Outlet)", 
          tag: "Ethnic", 
          desc: "The BTM outlet often has great discounts on ethnic wear and kurtas.", 
          mapLink: "https://www.google.com/maps/search/Trends+BTM+Layout" 
        },
        { 
          name: "Ghani Fashions", 
          tag: "Budget", 
          desc: "Small shop for extremely cheap daily wear and night pants.", 
          mapLink: "https://maps.google.com/?cid=13103484684408623786&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ8" 
        },
        { 
          name: "Brand Factory (BTM)", 
          tag: "Mega", 
          desc: "If open (check status), huge discounts on brands. Often converts to Fashion Factory.", 
          mapLink: "https://maps.google.com/?cid=13103484684408623786&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ9" 
        },
        { 
          name: "Street Stalls (Gangothri)", 
          tag: "Street", 
          desc: "Near Gangothri Circle. Stalls selling phone covers, belts, and cheap slippers.", 
          mapLink: "https://maps.google.com/?cid=1386178521280339584&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ0" 
        },
        { 
          name: "Max Fashion", 
          tag: "Family", 
          desc: "Standard budget fashion store for the whole family.", 
          mapLink: "https://www.google.com/maps/search/?api=1&query=Max+Fashion+JP+Nagar" 
        }
      ]
    },
    {
    id: "hsr",
    label: "HSR Layout",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15555.776269926217!2d77.63252764023793!3d12.911622422997637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sclothing%20stores%20hsr%20layout!5e0!3m2!1sen!2sin!4v1716300000000!5m2!1sen!2sin",
    shops: [
      { 
        name: "Branded Apparels & Co", 
        tag: "Surplus", 
        desc: "Top Pick. Huge stock of branded surplus shirts, chinos, and denim. Expect 60-70% off on brands like US Polo and Levis.", 
        mapLink: "https://maps.app.goo.gl/BrandedApparelsHSR" 
      },
      { 
        name: "World of Brands (WoB)", 
        tag: "Winter Wear", 
        desc: "Massive warehouse-style store. Best for heavy winter jackets, hoodies, sweatshirts, and zippers.", 
        mapLink: "https://maps.app.goo.gl/WoBHSR" 
      },
      { 
        name: "Classic Export Surplus", 
        tag: "Budget", 
        desc: "Basement store hidden gem. Great for daily wear t-shirts, track pants, and shorts under ₹400.", 
        mapLink: "https://maps.app.goo.gl/ClassicExportHSR" 
      },
      { 
        name: "Brand O Brands", 
        tag: "Denim", 
        desc: "Specializes in denim and rugged wear. Good collection of jeans, denim jackets, and cargo pants.", 
        mapLink: "https://maps.app.goo.gl/BrandOBrandsHSR" 
      },
      { 
        name: "Hip Hopz Brand Factory", 
        tag: "Streetwear", 
        desc: "Trendy oversized tees, baggy cargo pants, and funky prints perfect for the gen-z aesthetic.", 
        mapLink: "https://maps.app.goo.gl/HipHopzHSR" 
      },
      { 
        name: "Zudio", 
        tag: "Basics", 
        desc: "Unbeatable for basics. Plain oversized tees (₹299), sliders (₹199), and affordable activewear.", 
        mapLink: "https://maps.app.goo.gl/ZudioHSR" 
      },
      { 
        name: "Fashion Factory", 
        tag: "Outlet", 
        desc: "Large multi-brand outlet. Often has clearance sales on ethnic wear and winter jackets.", 
        mapLink: "https://maps.app.goo.gl/FashionFactoryHSR" 
      },
      { 
        name: "Just Casuals", 
        tag: "Workwear", 
        desc: "Excellent collection of formal shirts, linen trousers, and office-friendly chinos at factory rates.", 
        mapLink: "https://maps.app.goo.gl/JustCasualsHSR" 
      },
      { 
        name: "Style Union", 
        tag: "Trendy", 
        desc: "Modern aesthetic store. Good for layered outfits, flannels, and baggy jeans at mid-range prices.", 
        mapLink: "https://maps.app.goo.gl/StyleUnionHSR" 
      },
      { 
        name: "OWND!", 
        tag: "Pre-Loved", 
        desc: "Curated mix of pre-loved and surplus items. You can find unique vintage pieces if you dig.", 
        mapLink: "https://maps.app.goo.gl/OWNDHSR" 
      },
      { 
        name: "Wonderkraftz Warehouse", 
        tag: "Bulk", 
        desc: "Wholesale vibe. Best for buying basic tees and socks in bulk for very cheap.", 
        mapLink: "https://maps.app.goo.gl/WonderkraftzHSR" 
      },
      { 
        name: "Snitch", 
        tag: "Premium", 
        desc: "Slightly pricier (₹1k-2k) but the best place for high-quality baggy cargos and korean-style pants.", 
        mapLink: "https://maps.app.goo.gl/SnitchHSR" 
      },
      { 
        name: "Club Jersey Store", 
        tag: "Sports", 
        desc: "Hidden gem for football fans. Cheap rejected jerseys, kits, and track pants.", 
        mapLink: "https://maps.app.goo.gl/ClubJerseyHSR" 
      },
      { 
        name: "The Linen Collection", 
        tag: "Fabrics", 
        desc: "Factory outlet rates for pure linen fabrics, trousers, and shirts. 'Old Money' aesthetic on a budget.", 
        mapLink: "https://maps.app.goo.gl/LinenCollectionHSR" 
      },
      { 
        name: "Hifi Branded Surplus", 
        tag: "Graphic Tees", 
        desc: "Small shop but often stocks export rejected graphic tees and hoodies for very cheap.", 
        mapLink: "https://maps.app.goo.gl/HifiSurplusHSR" 
      }
    ]
  },
    {
      id: "koramangala",
      label: "Koramangala",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15554.34668744035!2d77.6139462!3d12.9342293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sshopping%20koramangala!5e0!3m2!1sen!2sin!4v1709667000000!5m2!1sen!2sin",
      shops: [
        { 
          name: "EcoDhaga", 
          tag: "Thrift", 
          desc: "Authentic sustainable thrift store. Vintage jackets, unique shirts, and upcycled fashion.", 
          mapLink: "https://www.google.com/maps/search/EcoDhaga+Koramangala" 
        },
        { 
          name: "Hum India", 
          tag: "Legendary", 
          desc: "The OG surplus store. Huge stock of branded cargos, jackets, shirts, and accessories.", 
          mapLink: "https://www.google.com/maps/search/Hum+India+Koramangala" 
        },
        { 
          name: "Tibet Mall", 
          tag: "Imports", 
          desc: "Best for imported winter jackets, boots, edgy accessories, and grunge fashion.", 
          mapLink: "https://www.google.com/maps/search/Tibet+Mall+Koramangala" 
        },
        { 
          name: "Spice Girls", 
          tag: "Western", 
          desc: "Boutique with rack sales. Trendy western tops, dresses, and party wear at budget prices.", 
          mapLink: "https://www.google.com/maps/search/Spice+Girls+Koramangala" 
        },
        { 
          name: "Jyoti Nivas Street", 
          tag: "Street", 
          desc: "Lane full of street stalls selling tops, pyjamas, jewelry, and phone accessories.", 
          mapLink: "https://www.google.com/maps/search/Jyoti+Nivas+College+Road+Shopping" 
        },
        { 
          name: "The Brand Station", 
          tag: "Denim", 
          desc: "Reliable surplus store for men's denim, branded shirts, and casual trousers.", 
          mapLink: "https://www.google.com/maps/search/The+Brand+Station+Koramangala" 
        },
        { 
          name: "Fume", 
          tag: "Menswear", 
          desc: "Great for polos, shorts, and smart casuals. Often has good discounts on stock lots.", 
          mapLink: "https://www.google.com/maps/search/Fume+Clothing+Koramangala" 
        },
        { 
          name: "KSB Collections", 
          tag: "Rugged", 
          desc: "Focus on rugged wear, cargo pants, and heavy denim.", 
          mapLink: "https://www.google.com/maps/search/KSB+Collections+Koramangala" 
        },
        { 
          name: "One Off", 
          tag: "Streetwear", 
          desc: "Curated streetwear and aesthetic fits. Check for their pop-up sales.", 
          mapLink: "https://www.google.com/maps/search/One+Off+Clothing+Koramangala" 
        },
        { 
          name: "Cherry Pie", 
          tag: "Feminine", 
          desc: "Cute aesthetic dresses, tops, and skirts. Very popular for college wear.", 
          mapLink: "https://www.google.com/maps/search/Cherry+Pie+Koramangala" 
        },
        { 
          name: "The Brand Mate", 
          tag: "Jackets", 
          desc: "Good collection of surplus jackets, hoodies, and winter layers.", 
          mapLink: "https://www.google.com/maps/search/The+Brand+Mate+Koramangala" 
        },
        { 
          name: "5th Block Market", 
          tag: "Stalls", 
          desc: "Street vendors along the main road selling slippers, belts, and cheap accessories.", 
          mapLink: "https://www.google.com/maps/search/Koramangala+5th+Block+Police+Station" 
        },
        { 
          name: "Attic (Consignment)", 
          tag: "Luxury Thrift", 
          desc: "Consignment store for pre-loved high-street and luxury brands. Unique finds guaranteed.", 
          mapLink: "https://www.google.com/maps/search/The+Attic+Koramangala" 
        },
        { 
          name: "H&M (Sale Section)", 
          tag: "Mall", 
          desc: "Nexus Mall. Only check the specific 'Sale' racks for oversized hoodies under ₹799.", 
          mapLink: "https://www.google.com/maps/search/H%26M+Nexus+Mall+Koramangala" 
        }
      ]
    },
    {
      id: "jayanagar",
      label: "Jayanagar",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7777.627768586071!2d77.5802167!3d12.9298642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sjayanagar%204th%20block%20shopping!5e0!3m2!1sen!2sin!4v1709667000000!5m2!1sen!2sin",
      shops: [
        { 
          name: "4th Block Complex", 
          tag: "Hub", 
          desc: "The Holy Grail. 50+ shops inside for slippers (₹150), pyjamas, kurtas, and street wear. Bargain hard.", 
          mapLink: "https://www.google.com/maps/search/Jayanagar+4th+Block+Shopping+Complex" 
        },
        { 
          name: "The Discount Store", 
          tag: "Basics", 
          desc: "Huge discounts on mixed apparel. Great for picking up basic tees and daily wear.", 
          mapLink: "https://www.google.com/maps/search/The+Discount+Store+Jayanagar" 
        },
        { 
          name: "Street Vendors", 
          tag: "Cheapest", 
          desc: "Opposite the complex. Pavement stalls selling export reject joggers, tees, and funky pyjamas.", 
          mapLink: "https://www.google.com/maps/search/Jayanagar+4th+Block+Bus+Stand" 
        },
        { 
          name: "Jayanagar Market", 
          tag: "Fabrics", 
          desc: "Mix of traditional and western. Excellent for buying fabric pieces and accessories.", 
          mapLink: "https://www.google.com/maps/search/Jayanagar+Market" 
        },
        { 
          name: "D's Design Studio", 
          tag: "Boutique", 
          desc: "Budget-friendly boutique for custom fits and trendy readymade tops.", 
          mapLink: "https://www.google.com/maps/search/D's+Design+Studio+Jayanagar" 
        },
        { 
          name: "Sketches", 
          tag: "Shoes", 
          desc: "Great spot for cheap footwear, loafers, and slides to match baggy fits.", 
          mapLink: "https://www.google.com/maps/search/Sketches+Footwear+Jayanagar" 
        },
        { 
          name: "Max (Old Stock)", 
          tag: "Clearance", 
          desc: "This specific outlet often carries older stock which is baggier and cheaper than new collections.", 
          mapLink: "https://www.google.com/maps/search/Max+Fashion+Jayanagar" 
        },
        { 
          name: "Reliance Trends", 
          tag: "Layers", 
          desc: "Good for basic kurtas and shirts that can be layered with jackets.", 
          mapLink: "https://www.google.com/maps/search/Reliance+Trends+Jayanagar" 
        },
        { 
          name: "Go Colors", 
          tag: "Pants", 
          desc: "Go-to for leggings, jeggings, and comfortable pants in every color imaginable.", 
          mapLink: "https://www.google.com/maps/search/Go+Colors+Jayanagar" 
        },
        { 
          name: "Pantaloons Factory", 
          tag: "Outlet", 
          desc: "Factory outlet nearby offering branded rejects and last season's stock at deep discounts.", 
          mapLink: "https://www.google.com/maps/search/Pantaloons+Jayanagar" 
        },
        { 
          name: "Tibetan Plaza", 
          tag: "Winter", 
          desc: "Nearby complex focused on winter jackets, boots, and woolens.", 
          mapLink: "https://www.google.com/maps/search/Tibetan+Plaza+Jayanagar" 
        },
        { 
          name: "Cool Planet", 
          tag: "Kids/Teens", 
          desc: "Good options for smaller sizes, teens, and fun accessories.", 
          mapLink: "https://www.google.com/maps/search/Cool+Planet+Jayanagar" 
        },
        { 
          name: "Megamart", 
          tag: "Outlet", 
          desc: "Multi-brand outlet with discounts on brands like Ruggers and Colt.", 
          mapLink: "https://www.google.com/maps/search/Megamart+Jayanagar" 
        },
        { 
          name: "Local Leather Guy", 
          tag: "Repairs/Belts", 
          desc: "Stalls at the complex entrance selling genuine leather belts and wallets for cheap.", 
          mapLink: "https://www.google.com/maps/search/Jayanagar+Complex+Entrance" 
        },
        { 
          name: "The High Street", 
          tag: "Mix", 
          desc: "A mix of branded stores and smaller shops offering trendy clothing.", 
          mapLink: "https://www.google.com/maps/search/The+High+Street+Jayanagar" 
        }
      ]
    },
    {
      id: "indiranagar",
      label: "Indiranagar",
      mapEmbedUrl: "https://maps.google.com/?cid=5586975323143425413&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ9",
      shops: [
        {
          name: "Hum India Fab",
          tag: "Surplus",
          desc: "Branch of the famous Koramangala store. Premium surplus shirts and chinos.",
          mapLink: "https://maps.google.com/?cid=1574236887953402680&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ0"
        },
        {
          name: "Surplus Wardrobe",
          tag: "Export",
          desc: "Located in Benson Town (nearby). Excellent for branded export rejects.",
          mapLink: "https://maps.google.com/?cid=1574236887953402680&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ1"
        },
        {
          name: "Lovely Fashion",
          tag: "Boutique",
          desc: "Old school shop for budget-friendly trendy clothes and accessories.",
          mapLink: "https://maps.google.com/?cid=1574236887953402680&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ2"
        },
        {
          name: "Austin Polo",
          tag: "Menswear",
          desc: "Specializes in polo t-shirts and casual shirts at wholesale prices.",
          mapLink: "https://maps.google.com/?cid=1574236887953402680&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ3"
        },
        {
          name: "J R Dresses",
          tag: "Wholesale",
          desc: "Bulk dealer for casual wear. Good for finding cheap daily use clothes.",
          mapLink: "https://maps.google.com/?cid=1574236887953402680&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ4"
        },
        {
          name: "Branded Apparels & Co",
          tag: "Branch",
          desc: "Indiranagar outlet of the popular HSR surplus chain. Reliable quality.",
          mapLink: "https://maps.google.com/?cid=1574236887953402680&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ5"
        },
        {
          name: "G S Exports",
          tag: "Hidden",
          desc: "Small shop with high-quality export surplus fabrics and garments.",
          mapLink: "https://maps.google.com/?cid=1574236887953402680&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ6"
        },
        {
          name: "Westside (Outlet)",
          tag: "Sale",
          desc: "Check the clearance racks here for heavily discounted fast fashion items.",
          mapLink: "https://maps.google.com/?cid=1574236887953402680&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ7"
        },
        {
          name: "FashionTIY",
          tag: "Online/Offline",
          desc: "Wholesale supplier often stocking trendy items in local partner stores.",
          mapLink: "https://maps.google.com/?cid=1574236887953402680&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ8"
        },
        {
          name: "Toit Lane Boutiques",
          tag: "Window Shop",
          desc: "Several small unnamed boutiques in the lanes near Toit sell unique aesthetic pieces.",
          mapLink: "https://maps.google.com/?cid=1574236887953402680&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ9"
        }
      ]
    },
    {
      id: "kammanahalli",
      label: "Kammanahalli",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15549.622589437613!2d77.633915!3d13.009825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sexport%20surplus%20kammanahalli!5e0!3m2!1sen!2sin!4v1709667000000!5m2!1sen!2sin",
      shops: [
        {
          name: "Mayur Collection",
          tag: "Surplus",
          desc: "Famous export surplus store. Wide range of branded shirts, tees, and jeans at wholesale prices.",
          mapLink: "https://www.google.com/maps/search/Mayur+Collection+Kammanahalli"
        },
        {
          name: "Brands Outlet",
          tag: "Mix",
          desc: "Several shops with this name on the main road. Good for cheap branded shoes and tees.",
          mapLink: "https://www.google.com/maps/search/Brands+Outlet+Kammanahalli"
        },
        {
          name: "Puma/Nike Factory",
          tag: "Sport",
          desc: "Ring Road nearby. Authentic sports gear, shoes, and tracks at 40-50% off.",
          mapLink: "https://www.google.com/maps/search/Factory+Outlet+Kammanahalli"
        },
        {
          name: "FashionTIY",
          tag: "Wholesale",
          desc: "Good spot for bulk buying basics, hoodies, and activewear.",
          mapLink: "https://www.google.com/maps/search/Fashion+Kammanahalli"
        },
        {
          name: "Ants Hunt",
          tag: "Trendy",
          desc: "OMBR Layout. Good for trendy tops and casual wear.",
          mapLink: "https://www.google.com/maps/search/Ants+Hunt+Banaswadi"
        },
        {
          name: "Grasshopper",
          tag: "Menswear",
          desc: "RT Nagar nearby. Known for men's casual shirts and trousers.",
          mapLink: "https://www.google.com/maps/search/Grasshopper+RT+Nagar"
        },
        {
          name: "New Royal Fibers",
          tag: "Fabric",
          desc: "Great for fabrics if you want to stitch custom fits.",
          mapLink: "https://www.google.com/maps/search/New+Royal+Fibers+Kammanahalli"
        },
        {
          name: "S N Enterprises",
          tag: "Surplus",
          desc: "Export surplus dealer. Good for branded stock lots.",
          mapLink: "https://www.google.com/maps/search/S+N+Enterprises+Bangalore"
        },
        {
          name: "Ksb Collections",
          tag: "Casuals",
          desc: "Branch here as well. Reliable for budget daily wear.",
          mapLink: "https://www.google.com/maps/search/Ksb+Collections+Kammanahalli"
        },
        {
          name: "The Brand Mate",
          tag: "Jackets",
          desc: "Surplus jackets and branded winter wear.",
          mapLink: "https://www.google.com/maps/search/The+Brand+Mate+Bangalore"
        }
      ]
    },
    {
      id: "malleshwaram",
      label: "Malleshwaram",
      mapEmbedUrl: "https://maps.google.com/?cid=1806677646390431564&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ0",
      shops: [
        {
          name: "Rocky Fashions",
          tag: "Prints",
          desc: "Known for hand block printed fabrics and surplus clothing. Very high quality.",
          mapLink: "https://maps.google.com/?cid=1806677646390431564&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ1"
        },
        {
          name: "Addrezz Clothing Store",
          tag: "Surplus",
          desc: "Popular spot in Malleshwaram for branded surplus shirts and trousers.",
          mapLink: "https://maps.google.com/?cid=1806677646390431564&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ2"
        },
        {
          name: "Fashion Factory (Rajajinagar)",
          tag: "Outlet",
          desc: "Large outlet on Chord Road. Huge discounts on winter wear and shoes.",
          mapLink: "https://maps.google.com/?cid=1806677646390431564&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ3"
        },
        {
          name: "Amarjyothi Stores",
          tag: "Old School",
          desc: "Legendary store in Malleshwaram for innerwear and basic fabrics at wholesale rates.",
          mapLink: "https://maps.google.com/?cid=1806677646390431564&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ4"
        },
        {
          name: "The Brand Mart",
          tag: "Brands",
          desc: "Nagappa Block. focused on branded export surplus for men.",
          mapLink: "https://maps.google.com/?cid=1806677646390431564&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ5"
        },
        {
          name: "Mahaveer Exports",
          tag: "Wholesale",
          desc: "Ramachandrapuram. A hub for wholesale fabric and readymade garments.",
          mapLink: "https://maps.google.com/?cid=1806677646390431564&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ6"
        },
        {
          name: "Tip Top Fashions",
          tag: "Fabric",
          desc: "Ramachandrapuram. Famous for huge variety of fabrics sold by weight or meter.",
          mapLink: "https://maps.google.com/?cid=1806677646390431564&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ7"
        },
        {
          name: "Raymond (Outlet)",
          tag: "Formal",
          desc: "Dr Rajkumar Rd. Factory outlet for Raymond fabrics and readymade suits.",
          mapLink: "https://maps.google.com/?cid=1806677646390431564&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ8"
        },
        {
          name: "Max (Orion Mall)",
          tag: "Mall",
          desc: "Large format store. Good for seasonal sales and fresh stock.",
          mapLink: "https://maps.google.com/?cid=1806677646390431564&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ9"
        },
        {
          name: "Kalpana Tailors",
          tag: "Custom",
          desc: "Seshadripuram. Famous for stitching perfect fits from fabric bought nearby.",
          mapLink: "https://maps.google.com/?cid=9283403999006168292&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ0"
        },
        {
          name: "DFL Export House",
          tag: "Export",
          desc: "Rajajinagar. Direct export surplus garments. Hit or miss but cheap.",
          mapLink: "https://maps.google.com/?cid=9283403999006168292&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ1"
        }
      ]
    },
    {
      id: "central",
      label: "Commercial/Brigade",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3887.822787836709!2d77.6083073!3d12.9831969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scommercial%20street%20shopping!5e0!3m2!1sen!2sin!4v1709667000000!5m2!1sen!2sin",
      shops: [
        { 
          name: "Eastern Stores", 
          tag: "Surplus", 
          desc: "Famous old store on Comm St. Best for export surplus trousers, linen shirts, and cargos.", 
          mapLink: "https://www.google.com/maps/search/Eastern+Stores+Commercial+Street" 
        },
        { 
          name: "Vashi's House of Jeans", 
          tag: "Denim", 
          desc: "Tiny legendary shop. Huge collection of jeans in all fits (skinny, baggy, bootcut) at great prices.", 
          mapLink: "https://www.google.com/maps/search/Vashi's+House+of+Jeans" 
        },
        { 
          name: "Street Stalls", 
          tag: "Cheap", 
          desc: "Main road stalls (walk from Mysore Saree Udyog). ₹300 shirts, tops, and funky accessories.", 
          mapLink: "https://www.google.com/maps/search/Commercial+Street+Bangalore" 
        },
        { 
          name: "Sri Balaji Collections", 
          tag: "Mens", 
          desc: "Hidden gem for men's branded surplus shirts and formal trousers.", 
          mapLink: "https://www.google.com/maps/search/Sri+Balaji+Collections+Commercial+Street" 
        },
        { 
          name: "Lubna's", 
          tag: "Jewelry", 
          desc: "Aesthetic jewelry and accessories. Perfect for finding pieces to match your thrifted fits.", 
          mapLink: "https://www.google.com/maps/search/Lubna's+Commercial+Street" 
        },
        { 
          name: "Dubai Plaza", 
          tag: "Hype/Imports", 
          desc: "Rest House Rd (Brigade). Hub for imported 'hype' streetwear, sneakers, and bags.", 
          mapLink: "https://www.google.com/maps/search/Dubai+Plaza+Brigade+Road" 
        },
        { 
          name: "Rex Plaza", 
          tag: "Jackets", 
          desc: "Complex on Brigade Rd with multiple small shops selling export surplus jackets and tees.", 
          mapLink: "https://www.google.com/maps/search/Rex+Plaza+Brigade+Road" 
        },
        { 
          name: "Tibetan Market", 
          tag: "Grunge", 
          desc: "Underground market near Brigade Rd. Best for alternative fashion, grunge fits, and boots.", 
          mapLink: "https://www.google.com/maps/search/Tibetan+Market+Brigade+Road" 
        },
        { 
          name: "Fifth Avenue", 
          tag: "Suits", 
          desc: "Old school mall with independent boutiques offering suits and formal wear.", 
          mapLink: "https://www.google.com/maps/search/Fifth+Avenue+Brigade+Road" 
        },
        { 
          name: "Brown Shop", 
          tag: "Winter", 
          desc: "Commercial St. The go-to place for winter coats, woolens, and thermals.", 
          mapLink: "https://www.google.com/maps/search/Brown+Shop+Commercial+Street" 
        },
        { 
          name: "Salar", 
          tag: "Shoes", 
          desc: "Brigade Rd. Specializes in boots and formal shoes.", 
          mapLink: "https://www.google.com/maps/search/Salar+Shoes+Brigade+Road" 
        },
        { 
          name: "Gangoor", 
          tag: "Ethnic", 
          desc: "Commercial St. Known for affordable ethnic wear and kurtas.", 
          mapLink: "https://www.google.com/maps/search/Gangoor+Commercial+Street" 
        },
        { 
          name: "Texs Mart", 
          tag: "Mega", 
          desc: "Commercial St Branch. Massive stock of budget clothes for the whole family.", 
          mapLink: "https://www.google.com/maps/search/Texs+Mart+Commercial+Street" 
        },
        { 
          name: "Fazal's", 
          tag: "Kids/Fabric", 
          desc: "Commercial St. Great for kids' clothing and buying fabric by the meter.", 
          mapLink: "https://www.google.com/maps/search/Fazal's+Commercial+Street" 
        },
        { 
          name: "Mysore Saree Udyog", 
          tag: "Silk/Fabric", 
          desc: "Iconic. Best for high-quality fabrics if you are stitching own designs.", 
          mapLink: "https://www.google.com/maps/search/Mysore+Saree+Udyog" 
        }
      ]
    },
    {
      id: "whitefield",
      label: "Whitefield",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15553.473539827368!2d77.6974!3d12.9526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfactory%20outlets%20marathahalli!5e0!3m2!1sen!2sin!4v1709667000000!5m2!1sen!2sin",
      shops: [
        {
          name: "Brand Factory Outlet",
          tag: "Mega",
          desc: "Near the bridge. Huge discounts (Flat 50-60%) on major brands like Lee, Wrangler, etc.",
          mapLink: "https://www.google.com/maps/search/Brand+Factory+Marathahalli"
        },
        {
          name: "Adidas Factory Outlet",
          tag: "Sport",
          desc: "Specific factory outlet under the bridge. Best for sneakers, tracks, and jerseys.",
          mapLink: "https://www.google.com/maps/search/Adidas+Factory+Outlet+Marathahalli"
        },
        {
          name: "Nike Factory Store",
          tag: "Sport",
          desc: "Next to Adidas. Great deals on running shoes and activewear.",
          mapLink: "https://www.google.com/maps/search/Nike+Factory+Store+Marathahalli"
        },
        {
          name: "Levi's Factory Outlet",
          tag: "Denim",
          desc: "Get original Levi's jeans for ₹1000-₹1500 (minor defects or old stock).",
          mapLink: "https://www.google.com/maps/search/Levi's+Factory+Outlet+Marathahalli"
        },
        {
          name: "Show Off",
          tag: "Party",
          desc: "Good for cheap party wear, flashy prints, and clubbing outfits.",
          mapLink: "https://www.google.com/maps/search/Show+Off+Marathahalli"
        },
        {
          name: "Puma Factory Outlet",
          tag: "Sport",
          desc: "Discounted Puma gear. Good for motorsport shoes and tees.",
          mapLink: "https://www.google.com/maps/search/Puma+Factory+Outlet+Marathahalli"
        },
        {
          name: "Skechers Outlet",
          tag: "Shoes",
          desc: "Comfortable footwear at slashed prices.",
          mapLink: "https://www.google.com/maps/search/Skechers+Outlet+Marathahalli"
        },
        {
          name: "Woodland Factory Outlet",
          tag: "Rugged",
          desc: "Heavy duty boots, jackets, and outdoor gear at factory rates.",
          mapLink: "https://www.google.com/maps/search/Woodland+Factory+Outlet+Marathahalli"
        },
        {
          name: "Pepe Jeans Outlet",
          tag: "Denim",
          desc: "Discounted denim and casual wear from Pepe Jeans.",
          mapLink: "https://www.google.com/maps/search/Pepe+Jeans+Outlet+Marathahalli"
        },
        {
          name: "Louis Philippe Outlet",
          tag: "Formal",
          desc: "Great for formal shirts and trousers if you need office wear on a budget.",
          mapLink: "https://www.google.com/maps/search/Louis+Philippe+Outlet+Marathahalli"
        },
        {
          name: "Fashion Factory",
          tag: "Warehouse",
          desc: "Garudachar Palya. Massive stock of multi-brand clothing.",
          mapLink: "https://maps.google.com/?cid=9283403999006168292&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ2"
        },
        {
          name: "Jockey Factory Second Sale",
          tag: "Innerwear",
          desc: "Great discounts on innerwear and activewear (minor defects).",
          mapLink: "https://maps.google.com/?cid=9283403999006168292&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ3"
        },
        {
          name: "Style Stash",
          tag: "Surplus",
          desc: "Hidden gem for export surplus clothing in Whitefield.",
          mapLink: "https://maps.google.com/?cid=9283403999006168292&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ4"
        },
        {
          name: "One Stop Fashion",
          tag: "Mix",
          desc: "Budget store for daily wear and casuals.",
          mapLink: "https://maps.google.com/?cid=9283403999006168292&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ5"
        },
        {
          name: "Komul Nandhini Outlet",
          tag: "Budget",
          desc: "Known for very affordable kurtis and women's wear.",
          mapLink: "https://maps.google.com/?cid=9283403999006168292&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ6"
        }
      ]
    },
    {
      id: "oldcity",
      label: "Chickpet/Majestic",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15552.2854930353!2d77.5735!3d12.9698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1schickpet%20market!5e0!3m2!1sen!2sin!4v1709667000000!5m2!1sen!2sin",
      shops: [
        { 
          name: "Chickpet Plaza", 
          tag: "Fabric", 
          desc: "Old school plaza. Best for wholesale fabrics (velvet, corduroy, linen) to stitch your own fits.", 
          mapLink: "https://www.google.com/maps/search/Chickpet+Plaza" 
        },
        { 
          name: "S.K. Fashions", 
          tag: "Ethnic", 
          desc: "Budget-friendly occasion wear, lehengas, and suits.", 
          mapLink: "https://www.google.com/maps/search/S.K.Fashions+Chickpet" 
        },
        { 
          name: "Balepet Main Rd", 
          tag: "Jeans", 
          desc: "The 'Denim Street'. Rows of shops selling unbranded jeans for ₹400-600.", 
          mapLink: "https://www.google.com/maps/search/Balepet+Main+Road+Bangalore" 
        },
        { 
          name: "Moksh Creations", 
          tag: "Wholesale", 
          desc: "Fabrics for custom aesthetic fits. Wholesale rates available.", 
          mapLink: "https://www.google.com/maps/search/Moksh+Creations+Chickpet" 
        },
        { 
          name: "Roboskin Jackets", 
          tag: "Leather", 
          desc: "Located in Sudhama Nagar (nearby). Best place for leather jackets.", 
          mapLink: "https://www.google.com/maps/search/Roboskin+Jackets+Sudhama+Nagar" 
        },
        { 
          name: "Gold Garments", 
          tag: "Stocklots", 
          desc: "Surplus stock lots. You have to dig through piles, but can find hidden gems.", 
          mapLink: "https://www.google.com/maps/search/Gold+Garments+Sudhama+Nagar" 
        },
        { 
          name: "National Market", 
          tag: "Tech/Shoes", 
          desc: "Majestic. Famous for 'First Copy' watches, shoes, and gadgets. Bargain HARD.", 
          mapLink: "https://www.google.com/maps/search/National+Market+Majestic" 
        },
        { 
          name: "Sukh Sagar Mall", 
          tag: "Imports", 
          desc: "Near Majestic. Good for imported clothes and accessories.", 
          mapLink: "https://www.google.com/maps/search/Sukh+Sagar+Mall+Gandhinagar" 
        },
        { 
          name: "Burma Bazaar", 
          tag: "Cheap", 
          desc: "For cheap perfumes, belts, wallets, and sunglasses.", 
          mapLink: "https://www.google.com/maps/search/Burma+Bazaar+Bangalore" 
        },
        { 
          name: "Hong Kong Market", 
          tag: "Accessories", 
          desc: "Inside National Market area. Gadgets, phone cases, and streetwear accessories.", 
          mapLink: "https://www.google.com/maps/search/Hong+Kong+Market+Majestic" 
        },
        { 
          name: "Himalaya Silk", 
          tag: "Sarees", 
          desc: "Cheap sarees and fabrics suitable for upcycling projects.", 
          mapLink: "https://www.google.com/maps/search/Himalaya+Silk+Centre+Chickpet" 
        },
        { 
          name: "OK Market", 
          tag: "Scrap/Thrift", 
          desc: "Narrow lane in Chickpet. Everything is cheap. A true adventure for scrap/thrift hunters.", 
          mapLink: "https://www.google.com/maps/search/OK+Market+Chickpet" 
        },
        { 
          name: "Sunday Bazaar", 
          tag: "Flea", 
          desc: "BVK Iyengar Rd (Sun Mornings). The ultimate flea market for thrifting if you wake up early.", 
          mapLink: "https://www.google.com/maps/search/BVK+Iyengar+Road+Sunday+Bazaar" 
        },
        { 
          name: "Navrang Boutique", 
          tag: "Velvet", 
          desc: "Good for specific heavy fabrics like velvet.", 
          mapLink: "https://www.google.com/maps/search/Navrang+Boutique+Chickpet" 
        },
        { 
          name: "Avenue Road", 
          tag: "Books/Clothes", 
          desc: "Primarily second-hand books, but also has stalls with random clothing piles.", 
          mapLink: "https://www.google.com/maps/search/Avenue+Road+Bangalore" 
        }
      ]
    }
  ];