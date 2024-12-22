# deploy-cv-k8s

```
app-helm/
├── charts/
│   ├── spring-application/   # Chart Spring téléchargé
│   └── vuejs-application/    # Chart Vue.js téléchargé
├── templates/
├── values.yaml
└── Chart.yaml

```


## Accès à la ligne de commande

1.Authentification au cluster
```
gcloud auth login
```

2.Configurez l'accès à la ligne de commande kubectl  en exécutant la commande suivante :
```
gcloud container clusters get-credentials hello-world-cluster --region europe-central2 --project eternal-respect-445421-c6
```

## Configuration connexion gcloud

1. Installez le composant kubectl
```
gcloud components install kubectl
```
2. Vérifiez que kubectl est installé en validant qu'il s'agit bien de la dernière version :
```
kubectl version --client
```
3. Installez le binaire gke-gcloud-auth-plugin :
```
gcloud components install gke-gcloud-auth-plugin
```


## Chart helm
Répo chart helm : https://artifacthub.io/

Pour crée helm vierge:
```
helm create app-helm
```

Pour ajouter des subcharts Helm (comme Spring et Vue.js) dans notre chart Helm principal (app-helm), 
vous devez définir ces subcharts dans la section dependencies du fichier Chart.yaml et les configurer 
dans le fichier values.yaml.

1. Ajoute des dépendances dans le Chart.yaml
Dans votre fichier Chart.yaml, ajoutez la section dependencies pour inclure les charts de Spring et Vue.js.
 
Le dependeces chart, on peut le trouve dans le hub: https://artifacthub.io/

```
dependencies:
  - name: spring-application
    version: "1.0.5"
    repository: "https://olehrgf.github.io/helm-charts/"
```

2. Récupération helm chart.
Une fois que vous avez mis à jour le fichier Chart.yaml, vous devrez ensuite installer ou mettre à jour vos dépendances.

```
helm dependency update
```
Cela téléchargera les charts des dépendances dans le répertoire charts/ de votre projet.
Récupérer et télécharger les dépendances dans le répertoire charts/


3. Configurer les sous-charts dans values.yaml

4. Installer le chart principal avec ses subcharts pour le déployer:
- Intall chart et sub-chart
```
helm install spring-tests-api . -f ./values.yaml
```

- Mettre à jour chart 

```
helm upgrade spring-tests-api . -f ./values.yaml
```