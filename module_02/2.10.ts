{
    // mapped types
    type Area = {
        height: number;
        width: number;
    }

    type AreaString = {
        [key in keyof Area] : string;
    }

    type AreaCustom<T> = {
        [key in keyof T] : T[key];
    }

    const area: AreaCustom<{height: number; width: string}> = {    
        height: 100,
        width: "200"
    }

    const site: AreaCustom<Area> = {
        height: 100,
        width: 500
    }


    // type lookup
    type height = Area["height"];
}