+-------------------+        +-----------------+      +-------------------+
|   Collaboration  |        |       Role      |      |    Assignment     |
+-------------------+        +-----------------+      +-------------------+
| - id: int         |        | - id: int       |      | - id: int         |
| - name: string    | 1    * | - name: string  | 1   *| - role: Role      |
|                   |--------|                 |------| - participant: str|
| - roles: Backbone.Collection |                 |      +-------------------+
| - activities: Backbone.Collection |             |
| - deliverableFlows: Backbone.Collection |       |
| - businessItems: Backbone.Collection |          |
| - portDelegations: Backbone.Collection |        |
| - delegationContexts: Backbone.Collection |     |
| - scenarios: Backbone.Collection |              |
| - assignments: Backbone.Collection |            |
+-------------------+                              |
        |                                         |
        |                                         |
        |                                         |
        |                                         |
+-------------------------+        +-----------------+
|       Activity          |        | DeliverableFlow |
+-------------------------+        +-----------------+
| - id: int               |        | - id: int       |
| - name: string          |        | - details: string |
+-------------------------+        +-----------------+
                                    |
                                    |
                            +-------------------+
                            |   BusinessItem    |
                            +-------------------+
                            | - id: int         |
                            | - details: string |
                            +-------------------+
                                    |
                                    |
                            +-------------------+
                            |  PortDelegation   |
                            +-------------------+
                            | - id: int         |
                            | - port: string    |
                            | - portContainer: string |
                            +-------------------+
                                    |
                                    |
                            +-------------------+
                            | DelegationContext |
                            +-------------------+
                            | - id: int         |
                            | - details: string |
                            +-------------------+
                                    |
                                    |
                            +-------------------+
                            |      Scenario     |
                            +-------------------+
                            | - id: int         |
                            | - details: string |
                            +-------------------+
