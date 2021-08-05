/// <reference types="cypress"/>

import req from '../support/api/request'
import assertions from '../support/api/assertions'



context('Usuários', () => {
    it('Quando criar um novo usuário, então ele deve ser listado com os demais', () => {
        req.postUsers().then(postUsersResponse => {
            assertions.shouldHaveStatus(postUsersResponse, 200)
            assertions.shouldUsersIdNotNull(postUsersResponse)
            assertions.shouldDurationBeFast(postUsersResponse);
            req.getAllUsers(postUsersResponse).then(getAllUsersresponse => {
                assertions.shouldUsersEmailExists(postUsersResponse.body.data.email, getAllUsersresponse);
            })
        })
    });


    it('Ao alterar um usuário com sucesso, então seus dados devem ser atualizados', () => {
        req.postUsers().then(postUsersResponse => {
            req.updateUser(postUsersResponse).then(putUserResponse => {
                assertions.shouldHaveStatus(putUserResponse, 200);
                assertions.shouldUserDataBeUpdated(putUserResponse)
                req.getSingleUser(postUsersResponse).then(getSingleUserResponse => {
                    assertions.shouldHaveStatus(getSingleUserResponse, 200)
                    assertions.shouldUsersIdNotNull(getSingleUserResponse)                    
                    assertions.shouldUserDataBeUpdated(getSingleUserResponse)
                })
            })
        })
    });

    it('Ao excluir um usuário, então ele não deve ser exibido na listagem de usuários', () => {
        req.postUsers().then(postUsersResponse => {
            assertions.shouldHaveStatus(postUsersResponse, 200)
            assertions.shouldUsersIdNotNull(postUsersResponse)
            assertions.shouldDurationBeFast(postUsersResponse);
            req.deleteUser(postUsersResponse).then(deleteUserResponse => {
                assertions.shouldHaveStatus(deleteUserResponse, 200)
                req.getAllUsers(postUsersResponse).then(getAllUsersResponse => {
                   assertions.shouldListBeEmpty(getAllUsersResponse)
                })
            })
        })
    })
});
