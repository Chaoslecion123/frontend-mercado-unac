import React from 'react';

const Pagination = ({perPage,page,count}) => {


    return(
        <>
            aqui ira la paginacion
            {/* <nav className="pull-right">
                <ul className="pagination pagination-circle pg-blue mb-0">

                <li className="items">{{ getMin() }} - {{ getMax() }} de {{ count }} </li>
                    <li (click)="onPrev()" className="page-item" [ngClass]="{ 'disabled': page === 1 || loading }">
                        <a className="page-link" aria-label="Previous">
                            <span aria-hidden="true"><i className="fa fa-angle-left"></i> </span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>

                    <li className="page-item active"><a className="page-link">{{ page }}</a></li>

                    <li (click)="onNext(true)"  className="page-item" [ngClass]="{ 'disabled': lastPage() || loading }">
                        <a className="page-link" aria-label="Next">
                            <span aria-hidden="true"><i className="fa fa-angle-right"></i> </span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>

                </ul>
            </nav> */}
        </>
        
    );
}

export default Pagination;