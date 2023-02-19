export const getSortedFirebaseData = ({querySnapshot, order, filter}) => {
    const firebaseReports: any = []
    querySnapshot.forEach((doc) => {
        firebaseReports.push(
            doc.data()
        )
    });
    let sortedFirebaseReports;
    if(order === "asc"){
        sortedFirebaseReports = firebaseReports.sort((a, b)=>{
            return ('' + a[filter]).localeCompare(b[filter]);
        })
    } else if (order === "desc"){
        sortedFirebaseReports = firebaseReports.sort((a, b)=>{
            return ('' + b[filter]).localeCompare(a[filter]);
        })
    }
    return sortedFirebaseReports
}