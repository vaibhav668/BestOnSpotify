#include<iostream>
using namespace std;
#define MAX 5
class Queue{
    int front;
    int rear;
    int arr[MAX];
    public:
 Queue(){
    front=-1;
    rear=-1;
 }
void enqueue(int x){
if(rear==MAX-1){
    cout<<"overflow!!";
    return;
}
if(front==-1)front=0;
arr[++rear]=x;
cout<<x<<" inserted in the queue\n";

}
void dequeue(){
    if(front==-1||front>rear){
        cout<<"queue is empty\n";
        return;
    }
    cout<<arr[front++]<<"removed from queue";
}
int peek(){
    if(front==-1||front>rear){
        cout<<"queue is empty";
        return -1;
    }
    return arr[front];
}
void  traverse(){
    if(front==-1||front>rear){
cout<<"The queue is empty/n";
    }
    for(int i=front;i<=rear;i++){
        cout<<arr[i]<<endl;
    }
}
};
int main(){
Queue q;
q.enqueue(5);
q.peek();
q.traverse();
return 0;

}