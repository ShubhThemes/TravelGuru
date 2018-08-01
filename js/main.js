//Sidenav
        const sideNav = document.querySelector('.sidenav');
        M.Sidenav.init(sideNav,{});
        
        //Slider
        const slider = document.querySelector('.slider');
        M.Slider.init(slider,{
            indicators: false,
            height: 500,
            transitions: 500,
            interval: 6000,
        });
        
        //Autocomplete
        const ac = document.querySelector('.autocomplete');
        M.Autocomplete.init(ac,{
           data: {
               "Dehradun": null,
               "Rishikesh": null,
               "Nainital": null,
               "Haridwar": null,
               "Mussoorie": null,
               "Badrinath": null,
               "Kedarnath": null,
               "Gangotri": null,
               "Chamoli": null,
               "Auli": null,
               "Chopta": null,
               "Rudraprayag": null,
           } 
        });
        
        //Material boxed
        const mb = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(mb,{});
        
        //ScrollSpy
        const ss = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(ss,{});
        