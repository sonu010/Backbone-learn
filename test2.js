// // Define a Collaboration class
// class Collaboration {
//     constructor(id, name) {
//         this.id = id;
//         this.name = name;
//         this.roles = new Backbone.Collection([], { model: Role });
//         this.activities = new Backbone.Collection([], { model: Activity });
//         this.deliverableFlows = new Backbone.Collection([], { model: DeliverableFlow });
//         this.businessItems = new Backbone.Collection([], { model: BusinessItem });
//         this.portDelegations = new Backbone.Collection([], { model: PortDelegation });
//         this.delegationContexts = new Backbone.Collection([], { model: DelegationContext });
//         this.scenarios = new Backbone.Collection([], { model: Scenario });
//         this.assignments=new Backbone.Collection([],{model:Assignment});
//     }
// }

// // Define a Role class
// class Role extends Backbone.Model {
//     constructor(attributes, options) {
//         super(attributes, options);
//     }
// }

// // Define an Assignment class
// class Assignment extends Backbone.Model {
//     constructor(attributes, options) {
//         super(attributes, options);
//     }
// }

// // Define an Activity class
// class Activity extends Backbone.Model {
//     constructor(attributes, options) {
//         super(attributes, options);
//     }
// }

// // Define a DeliverableFlow class
// class DeliverableFlow extends Backbone.Model {
//     constructor(attributes, options) {
//         super(attributes, options);
//     }
// }

// // Define a BusinessItem class
// class BusinessItem extends Backbone.Model {
//     constructor(attributes, options) {
//         super(attributes, options);
//     }
// }

// // Define a PortDelegation class
// class PortDelegation extends Backbone.Model {
//     constructor(attributes, options) {
//         super(attributes, options);
//     }
// }

// // Define a DelegationContext class
// class DelegationContext extends Backbone.Model {
//     constructor(attributes, options) {
//         super(attributes, options);
//     }
// }

// // Define a Scenario class
// class Scenario extends Backbone.Model {
//     constructor(attributes, options) {
//         super(attributes, options);
//     }
// }

// // Example usage:
// // Create a Collaboration
// const collaboration = new Collaboration(1, 'Example Collaboration');

// // Create and add roles to the collaboration
// const role1 = new Role({ id: 1, name: 'Role 1' });
// const role2 = new Role({ id: 2, name: 'Role 2' });
// collaboration.roles.add(role1);
// collaboration.roles.add(role2);

// // Create and add assignments
// const assignment1 = new Assignment({ id: 1, role: role1, participant: 'Participant A' });
// const assignment2 = new Assignment({ id: 2, role: role2, participant: 'Participant B' });
// collaboration.assignments.add(assignment1);
// collaboration.assignments.add(assignment2);

// // Create and add activities
// const activity1 = new Activity({ id: 1, name: 'Activity 1' });
// const activity2 = new Activity({ id: 2, name: 'Activity 2' });
// collaboration.activities.add(activity1);
// collaboration.activities.add(activity2);

// // Create and add deliverable flows
// const flow1 = new DeliverableFlow({ id: 1, details: 'Flow 1 details' });
// const flow2 = new DeliverableFlow({ id: 2, details: 'Flow 2 details' });
// collaboration.deliverableFlows.add(flow1);
// collaboration.deliverableFlows.add(flow2);

// // Create and add business items
// const item1 = new BusinessItem({ id: 1, details: 'Item 1 details' });
// const item2 = new BusinessItem({ id: 2, details: 'Item 2 details' });
// collaboration.businessItems.add(item1);
// collaboration.businessItems.add(item2);

// // Create and add port delegations
// const portDelegation1 = new PortDelegation({ id: 1, port: 'Port 1', portContainer: 'PortContainer A' });
// const portDelegation2 = new PortDelegation({ id: 2, port: 'Port 2', portContainer: 'PortContainer B' });
// collaboration.portDelegations.add(portDelegation1);
// collaboration.portDelegations.add(portDelegation2);

// // Create and add delegation contexts
// const context1 = new DelegationContext({ id: 1, details: 'Context 1 details' });
// const context2 = new DelegationContext({ id: 2, details: 'Context 2 details' });
// collaboration.delegationContexts.add(context1);
// collaboration.delegationContexts.add(context2);

// // Create and add scenarios
// const scenario1 = new Scenario({ id: 1, details: 'Scenario 1 details' });
// const scenario2 = new Scenario({ id: 2, details: 'Scenario 2 details' });
// collaboration.scenarios.add(scenario1);
// collaboration.scenarios.add(scenario2);

// // Now you have a collaboration object with various related entities.
// // You can perform operations or manipulations as per your requirements.


// console.log("Collaboration:", collaboration);
// console.log("Roles:", collaboration.roles);
// console.log("Assignments:", collaboration.assignments);
// console.log("Activities:", collaboration.activities);
// console.log("Deliverable Flows:", collaboration.deliverableFlows);
// console.log("Business Items:", collaboration.businessItems);
// console.log("Port Delegations:", collaboration.portDelegations);
// console.log("Delegation Contexts:", collaboration.delegationContexts);
// console.log("Scenarios:", collaboration.scenarios);