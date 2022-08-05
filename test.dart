class B{
void perform()=>print("perform");
}
mixin C {
void performc()=>print("piano");
void perform()=>performc();
}
mixin D {
void performd()=>print("guitar");
void perform()=>performd();
}

class Musician extends B with C, D{

}

Iterable<int> hello (int n) sync*{
print("first gen");
for(var i=1; i <=n; i++){
print("the first generated $i" );
yield i;
}

}


Iterable<int> he (int n) sync*{
print("second gen");
for(var i=1; i <=n; i++){
print("the second generated $i" );
yield* hello(n);
}

}


List<dynamic> tet (int n){
final list =[];

for(var k =1 ; k <=n; n++){
for(var j = 1; j <=k; j++){
print("$j and his father $k");
list.add("$j and his father $k");

}
}
return list;
}


void main() {
Musician musician = Musician();
musician.performd();
musician.performc();
musician.perform();
final h =he(6);
print(h.elementAt(5));
print(h.where((e)=>e==e.isEven));
print("down the loop");
print(tet(8));

}