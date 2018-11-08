import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText, CardImg, CardImgOverlay } from 'reactstrap';

class DishdetailComponent extends Component {

    renderDish (dish) {
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay> </CardImgOverlay>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {

        return(
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id} >
                                <div>{comment.comment}</div>
                                <br />
                                <div>-- {comment.author} , {comment.date}</div>
                            </li>
                        );
                    })}
                </ul>
        );

    }

    render() {
        const dish = this.props.dish;

        if (dish != null) {
            return(
                <div class="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

}

export default DishdetailComponent;