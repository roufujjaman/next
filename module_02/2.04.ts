{

    // interface with generics
    interface Developer<T> {
        name: string;
        computer: {
            id: number,
            ip: string,
        }
        skill: T
    }

    const developer1: Developer<{frontEnd: string[], backEnd: string[]}> = {
        name: 'Alan',
        computer: {
            id: 1,
            ip: '192.159.0.1'
        },
        skill: {
            frontEnd: ['HTML', 'CSS', 'React', 'Javascript'],
            backEnd: ['Go', 'Python', 'Kotlin']
        }
    }

    const developer2: Developer<{frontEnd: string[], backEnd: string[], design: string[]}> = {
        name: 'Tim',
        computer: {
            id: 40,
            ip: '192.245.0.4'
        },
        skill: {
            frontEnd: ['Dart', 'Jetpack Compose'],
            backEnd: ['C#', 'Kotlin'],
            design: ['Figma', 'Illustrator']
        }
    }

    
    interface DevSkills {
        frontEnd: string[];
        backEnd: string[];
    }

    const developer3: Developer<DevSkills> = {
        name: 'Julia',
        computer: {
            id: 59,
            ip: '178.256.8.2'
        },
        skill: {
            frontEnd: ['CSS', 'HTML'],
            backEnd: ['JS', 'TS']
        }
    }

    interface DevDesignSkills extends DevSkills {
        design: string[];
    }

    const developer4: Developer<DevDesignSkills> = {
        name: 'Geoffry',
        computer: {
            id: 200,
            ip: '123.123.1.6'
        },
        skill: {
            frontEnd: ['HTML', 'CSS', 'JS', 'TS'],
            backEnd: ['go', 'kotlin', 'java'],
            design: ['PS', 'AI', 'XD']
        }
    }

    console.log(developer4)
}