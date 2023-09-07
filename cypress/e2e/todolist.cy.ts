import IToDo from '@/entities/ToDo/model/types/IToDo';

const mockTodos: IToDo[] = [
    {
        id: 100,
        value: 'mock value',
        form: 'normal',
        status: 'undone',
    },
    {
        id: 101,
        value: 'mock value 2',
        form: 'normal',
        status: 'done',
    },
];

const firstMockIdToDo = mockTodos[0].id;
const secondMockIdToDo = mockTodos[1].id;

describe('toDoList testing e2e', () => {
    beforeEach(() => {
        cy.visit('/');
        localStorage.clear();
        localStorage.setItem('todos', JSON.stringify(mockTodos));
    });
    it('Check main childs components', () => {
        cy.getByTestId(`todotab.${firstMockIdToDo}`).should('exist');
        cy.getByTestId(`todotab.${secondMockIdToDo}`).should('exist');
        cy.getByTestId(`todotab.successBtn.${firstMockIdToDo}`).should('exist');
        cy.getByTestId(`todotab.editBtn.${firstMockIdToDo}`).should('exist');
        cy.getByTestId(`todotab.successBtn.${secondMockIdToDo}`).should(
            'exist',
        );
        cy.getByTestId(`todotab.deleteBtn.${secondMockIdToDo}`).should('exist');
        cy.getByTestId(`todolist.input`).should('exist');
        cy.getByTestId(`todolist.addBtn`).should('exist');
        cy.getByTestId('tab.done').should('exist');
        cy.getByTestId('tab.undone').should('exist');
    });
    it('Sort todo', () => {
        cy.getByTestId('tab.done').click();
        cy.getByTestId(`todotab.${secondMockIdToDo}`).should('exist');
        cy.getByTestId(`todotab.${firstMockIdToDo}`).should('not.exist');
        cy.getByTestId('tab.undone').click();
        cy.getByTestId(`todotab.${secondMockIdToDo}`).should('not.exist');
        cy.getByTestId(`todotab.${firstMockIdToDo}`).should('exist');
    });
    it('Add new todo', () => {
        cy.getByTestId(`todolist.input`).should('exist').type('new todo');
        cy.getByTestId(`todolist.addBtn`).should('exist').click();
        cy.getByTestId(`todotab.${secondMockIdToDo + 1}`)
            .should('exist')
            .should('have.text', 'new todo');
    });
    it('Delete todo', () => {
        cy.getByTestId(`todotab.deleteBtn.${secondMockIdToDo}`).first().click();
        cy.getByTestId(`todotab.${secondMockIdToDo}`).should('not.exist');
        cy.getByTestId(`todotab.${firstMockIdToDo}`).should('exist');
    });
    it('Done todo', () => {
        cy.getByTestId(`todotab.successBtn.${firstMockIdToDo}`).first().click();
        cy.getByTestId(`todotab.${firstMockIdToDo}`).should(
            'have.css',
            'text-decoration',
            'line-through solid rgb(219, 219, 219)',
        );
    });
    it('Undone todo', () => {
        cy.getByTestId(`todotab.successBtn.${secondMockIdToDo}`)
            .first()
            .click();
        cy.getByTestId(`todotab.${secondMockIdToDo}`).should(
            'not.have.css',
            'text-decoration',
            'line-through solid rgb(219, 219, 219)',
        );
    });
    it('Edit todo', () => {
        cy.getByTestId(`todotab.editBtn.${firstMockIdToDo}`).first().click();
        cy.getByTestId(`todotab.editInput.${firstMockIdToDo}`).type(' new');
        cy.getByTestId(`todotab.successBtn.${firstMockIdToDo}`).first().click();
        cy.getByTestId(`todotab.${firstMockIdToDo}`)
            .should('exist')
            .should('have.text', `${mockTodos[0].value} new`);
    });
    it('Edit todo, but canceled', () => {
        cy.getByTestId(`todotab.editBtn.${firstMockIdToDo}`).first().click();
        cy.getByTestId(`todotab.editInput.${firstMockIdToDo}`).type(' new');
        cy.getByTestId(`todotab.cancelBtn.${firstMockIdToDo}`).first().click();
        cy.getByTestId(`todotab.${firstMockIdToDo}`)
            .should('exist')
            .should('have.text', `${mockTodos[0].value}`);
    });
});
