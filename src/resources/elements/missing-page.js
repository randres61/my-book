export class MissingPage {
    static parameters = ['id'];
    missingComponent;
  
    loading( parameters ) {
      this.missingComponent = parameters.id;
    }
}