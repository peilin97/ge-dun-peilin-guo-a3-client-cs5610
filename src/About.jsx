import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import parse from 'html-react-parser';
import './about.css';


export default function About() {
    const questions = [
        "What is a URL shortener?",
        'Want to customize your path ID?',
        'Want to update your path ID\'s original URL?',
        'No longer want your path ID?',
    ];
    const answers = [
        '<p>A URL shortener helps you shorten the long and complicated link.\
        Compared to the original long and unattractive link, \
        the shortened version is prettier and easier for you to share.\
        </p>',
        '<p>Yes, we provide the option to customize your shortened link. \
        Your branded url should be at least 6 characters and up to 18 characters. \
        Allowed characters are lowercase letters(a-z), numbers(0-9), dash(-), and underscore(_).\
        </p>',
        "<p>To update a shortened link's original URL, search the path ID in the header.\
        You could update it on its edit page.\
        </p>",
        "<p>To delete a shortened link, search the path ID in the header.\
        You could delete it on its edit page.\
        </p>",
    ];
    const initialOpens = [];
    for (let i = 0; i < answers.length; i++) {
        initialOpens.push(false);
    }
    const [opens, setOpens] = useState(initialOpens);

    const handleOpen = id => {
        let newOpens = [...opens];
        newOpens[id] = !opens[id];
        setOpens(newOpens);
    };

    return (
        <div className="customJumbotron instruction">
            {questions.map(function (q, id) {
                return (
                    <div className="instructionItem">
                        <Button
                            variant="light"
                            className="uniInstruction instructionButton"
                            onClick={() => handleOpen(id)}
                            aria-controls={id}
                            aria-expanded={opens[id]}>
                            {parse(q)}
                        </Button>
                        <Collapse in={opens[id]} className="uniInstruction">
                            <div
                            className="answer"
                            id={id}>
                                {parse(answers[id])}
                            </div>
                        </Collapse>
                    </div>
                );
            })}
        </div>
    );
}