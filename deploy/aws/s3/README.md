# Init strapi bucket
## Step 1 - create bucket
`aws s3api create-bucket --bucket eks-intro-your-firstname-lastname --acl public-read --region eu-central-1 --create-bucket-configuration LocationConstraint=eu-central-1`
output:
{
"Location": "http://eks-intro-your-fistname-lastname.s3.amazonaws.com/"
}

## Step 2 - S3StrapiAccess Policy (as root)
AWS Console -> IAM -> Polices -> Create Policy S3StrapiAccess:
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:ListBucket",
                "s3:DeleteObject",
                "s3:PutObjectAcl"
            ],
            "Resource": [
                "arn:aws:s3:::eks-intro-your-firstname-lastname/*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:ListBucket",
                "s3:DeleteObject",
                "s3:PutObjectAcl"
            ],
            "Resource": [
                "arn:aws:s3:::eks-intro-your-firstname-lastname"
            ]
        }
    ]
}
```

### Step 3 - strapi user
AWS Console -> IAM -> Users -> Add user -> Strapi (Access Key - ...)
Create Group -> strapi -> add policy S3StrapiAccess
save .csv credentials


### Step 4 - bucket policy update
S3 -> eks-intro-your-firstname-lastname -> Permissions -> BucketPolicy:
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicRead",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::eks-intro-your-firstname-lastname",
                "arn:aws:s3:::eks-intro-your-firstname-lastname/*"
            ]
        }
    ]
}
```
