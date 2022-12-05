//* Явные аннотации типов — рекомендуемый, хотя и необязательный метод в TypeScrip.
//* Для его использования служит синтаксис variableName: type.
let x1: number;   //* Explicitly declares x as a number type

//* Для неявного определения типа переменной используйте тот же формат, что и в JavaScript. Например, let myVariable = 10 
let y1 = 1;       //* Implicitly declares y as a number type

//* Переменная z теперь может принимать любое присваиваемое ей значение. TypeScript определил тип z как any, так как вы не назначили тип и не инициализировали переменную при ее объявлении.
let z1;           //* Declares z without initializing it

//* ## Тип Boolean
let flag: boolean;
let yes = true;
let no = false;

//* ## Типы Number и BigInteger
let x2: number;
let y = 0;
let z3: number = 123.456;
let big: bigint = 100n;

//* ## Тип строки
let s: string;
let empty = "";
let abc = 'abc';
let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;

//* ## Типы null и undefined
//* В JavaScript и TypeScript есть два примитивных значения, которые указывают на отсутствующее или неинициализированное значение: null и undefined

//* ##Тип перечисления (enum)
//* Полезным дополнением к стандартному набору типов данных из JavaScript является тип перечисления или enum.
//* Перечисления позволяют указать список доступных значений. Они чрезвычайно полезны, если тип переменной может принимать определенный набор значений. Предположим, во внешней базе данных есть поле ContractStatus, которое содержит числа 1, 2 или 3, представляющие следующие состояния контактов: Permanent (Постоянный), Temp (Временный) и Apprentice (Стажер)
enum ContractStatus {
  Permanent, // 0
  Temp, // 1
  Apprentice // 2
}
let employeeStatus: ContractStatus = ContractStatus.Temp;

//* ## Тип any
//* Иногда приходится иметь дело со значениями, неизвестными во время разработки кода или имеющими максимально узкий диапазон. В таких случаях можно использовать типы any и unknown
//* any — это единственный тип, который может представлять любое значение JavaScript без ограничений. Это может быть полезно, если значение должно поступать из сторонней библиотеки или вводиться пользователем, то есть являться динамическим, так как типу any могут присваиваться значения различных типов. Тип any охватывает значения всех возможных типов.
let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK
randomValue();                  // Returns "randomValue is not a function" error
randomValue.toUpperCase();      // Returns "randomValue is not a function" error
//* Помните, что все удобство использования any достигается за счет потери безопасности типов. Безопасность типов — одна из основных причин использовать TypeScript. any следует использовать, только когда это действительно необходимо.

//* ## Тип unknown
//* Тип unknown похож на тип any тем, что типу unknown можно присваивать любое значение. Однако вы не можете получить доступ к свойствам типа unknown, а также вызывать или создавать их.
let randomValue2: unknown = 10;
randomValue2 = true;
randomValue2 = 'Mateo';
//randomValue2();                  // Error: Object is of type unknown
//randomValue2.toUpperCase();      // Error: Object is of type unknown

//* ## Утверждение типа
//* Если с переменной необходимо выполнить операцию как с другим типом данных, можно воспользоваться утверждением типа. Утверждение типа сообщает TypeScript, что вы выполнили специальные проверки, необходимые перед вызовом оператора.

//* ##Утверждения типов имеют две формы. Первая из них — синтаксис as (предпочтительно):
(randomValue as string).toUpperCase();
//* Вторая — синтаксис с угловыми скобками:
(<string>randomValue).toUpperCase();

//* ## Условия типов

//* Type	                Predicate
//* string	              typeof s === "string"
//* number	              typeof n === "number"
//* boolean	              typeof b === "boolean"
//* undefined	            typeof undefined === "undefined"
//* function	            typeof f === "function"
//* array	                Array.isArray(a)

//* ## Типы объединения
//* Тип объединения описывает значение, которое может иметь один из нескольких типов. Он может быть полезен, если вы не контролируете значение (например, оно поступает из библиотеки, интерфейса API или вводится пользователем).

let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid
// multiType = "twenty";   //* Invalid

//* ## Типы пересечений
//* Типы пересечений тесно связаны с объединениями, но используются совершенно иначе. Тип пересечения служит для объединения двух или нескольких типов, в результате чего получается тип, имеющий все свойства исходных типов. Это позволяет на основе существующих типов создать тип с необходимыми возможностями. В пересечении типы отделяются друг от друга амперсандом (&). Чаще всего используются с интерфейсами.
interface Employee {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};

//* ## Типы литералов
//* Литерал — это более конкретный подтип общего типа. Это означает, что в системе типов "Hello World" является string. В TypeScript есть три набора литеральных типов: string, number и boolean. С помощью литерального типа можно указать точное значение, которое должно иметь строковая, числовая или логическая переменная (например, "да", "нет" или "возможно").Литеральные типы представляются как объекты, массивы, функции или конструкторы и служат для создания новых типов на основе существующих.Лучше всего продемонстрировать использование литеральных типов на примере. Это определение создает литеральный тип с именем testResult, который может содержать одно из трех значений string:
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
// myResult = "failure";       //* Invalid
type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
// diceRoll = 7;    //* Invalid

//* ## Массивы
//* В TypeScript, как и в JavaScript, можно работать с массивами. Они записываются одним из двух способов. В первом случае указывается тип элементов, за которым стоят квадратные скобки ([ ]) для обозначения массива элементов этого типа:
let list1: number[] = [1, 2, 3];
//* Во втором случае используется универсальный тип Array и синтаксис Array<type>:
let list2: Array<number> = [1, 2, 3];

//* ## Кортежи
//* Массивы со значениями одного типа полезны, но иногда требуется массив со смешанными значениями. Для этого в TypeScript есть тип кортежа. Чтобы объявить кортеж, используйте синтаксис variableName: [type, type, ...].
let person1: [string, number] = ['Marcia', 35];