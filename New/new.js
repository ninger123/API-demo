/*
 1.human ���������������� name �� city
 2.human.__proto__ ��Ӧ�Ķ���Ҳ����ԭ�ͣ��������֣�species�����ߣ�walk����ʹ�ù��ߣ�useTools���⼸������
 3.human.__proto__.constructor === Human Ϊ true
 human2 �� human ���ơ�
 */
function Human(options){
    this.name =options.name;
    this.city =options.city;
}

Human.prototype.species ="human";
Human.prototype.walk = function(){};
Human.prototype.useTools=function(){};

var human = new Human({name:'Frank', city: 'Hangzhou'});
var human2 = new Human({name:'Jack', city: 'Hangzhou'});
