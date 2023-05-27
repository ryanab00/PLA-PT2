DROP TABLE IF EXISTS [dbo].[tblStudent], [dbo].tblMajor, [dbo].[tblState]
GO
CREATE TABLE [dbo].[tblState]	(
  [Id]    INT NOT NULL
, [State] VARCHAR (20) NOT NULL
, [Code]  VARCHAR (2) NOT NULL
, CONSTRAINT [PK.State.Id] PRIMARY KEY CLUSTERED ([Id] ASC)
);
GO
CREATE INDEX [IX.State.Code] ON [dbo].[tblState] ([Code])
GO
CREATE TABLE [dbo].[tblMajor]	(
  [Id]   INT NOT NULL
, [Name] VARCHAR (50) NOT NULL
, [Code] VARCHAR (10) NOT NULL
, [Desc] VARCHAR (MAX) NOT NULL
, CONSTRAINT [PK.Major.Id] PRIMARY KEY CLUSTERED ([Id] ASC)
);
GO
CREATE INDEX [IX.Major.Name] ON [dbo].[tblMajor] ([Name])
GO
CREATE TABLE [dbo].[tblStudent]	(
  [Id]           UNIQUEIDENTIFIER NOT NULL
, [StudentId]    VARCHAR (10) NOT NULL
, [FirstName]    VARCHAR (50) NOT NULL
, [LastName]     VARCHAR (50) NOT NULL
, [StateId]      INT NULL
, [MajorId]      INT NULL
, [GPA]          NUMERIC (4, 2) CONSTRAINT [DF.Student.GPA] DEFAULT ((0.00)) NULL
, [Status]       VARCHAR (1) CONSTRAINT [DF.Student.Status] DEFAULT ('A') NULL
, [DateAdded]    DATETIME CONSTRAINT [DF.Student.DateAdded] DEFAULT (getdate()) NOT NULL
, [DateModified] DATETIME DEFAULT (getdate()) NULL
, CONSTRAINT [PK.Student.Id] PRIMARY KEY CLUSTERED ([Id] ASC)
, CONSTRAINT [UQ.Student.StudentId] UNIQUE NONCLUSTERED ([StudentId] ASC)
, CONSTRAINT [FK.Student.To.State] FOREIGN KEY ([StateId]) REFERENCES [dbo].[tblState]([Id]) ON DELETE CASCADE ON UPDATE CASCADE
, CONSTRAINT [FK.Student.To.Major] FOREIGN KEY ([MajorId]) REFERENCES [dbo].[tblMajor]([Id]) ON DELETE CASCADE ON UPDATE CASCADE
);
GO
CREATE NONCLUSTERED INDEX [IX.Student.StudentId]
ON [dbo].[tblStudent]([StudentId] ASC);

INSERT INTO tblState ( Id, State,            Code )
VALUES               ( 1,  'Alabama',        'AL' )
,                    ( 2,  'Alaska',         'AK' )
,                    ( 3,  'Arizona',        'AZ' )
,                    ( 4,  'Arkansas',       'AR' )
,                    ( 5,  'California',     'CA' )
,                    ( 6,  'Colorado',       'CO' )
,                    ( 7,  'Connecticut',    'CT' )
,                    ( 8,  'Delaware',       'DE' )
,                    ( 9,  'Florida',        'FL' )
,                    ( 10, 'Georgia',        'GA' )
,                    ( 11, 'Hawaii',         'HI' )
,                    ( 12, 'Idaho',          'ID' )
,                    ( 13, 'Illinois',       'IL' )
,                    ( 14, 'Indiana',        'IN' )
,                    ( 15, 'Iowa',           'IA' )
,                    ( 16, 'Kansas',         'KS' )
,                    ( 17, 'Kentucky',       'KY' )
,                    ( 18, 'Louisiana',      'LA' )
,                    ( 19, 'Maine',          'ME' )
,                    ( 20, 'Maryland',       'MD' )
,                    ( 21, 'Massachusetts',  'MA' )
,                    ( 22, 'Michigan',       'MI' )
,                    ( 23, 'Minnesota',      'MN' )
,                    ( 24, 'Mississippi',    'MS' )
,                    ( 25, 'Missouri',       'MO' )
,                    ( 26, 'Montana',        'MT' )
,                    ( 27, 'Nebraska',       'NE' )
,                    ( 28, 'Nevada',         'NV' )
,                    ( 29, 'New Hampshire',  'NH' )
,                    ( 30, 'New Jersey',     'NJ' )
,                    ( 31, 'New Mexico',     'NM' )
,                    ( 32, 'New York',       'NY' )
,                    ( 33, 'North Carolina', 'NC' )
,                    ( 34, 'North Dakota',   'ND' )
,                    ( 35, 'Ohio',           'OH' )
,                    ( 36, 'Oklahoma',       'OK' )
,                    ( 37, 'Oregon',         'OR' )
,                    ( 38, 'Pennsylvania',   'PA' )
,                    ( 39, 'Rhode Island',   'RI' )
,                    ( 40, 'South Carolina', 'SC' )
,                    ( 41, 'South Dakota',   'SD' )
,                    ( 42, 'Tennessee',      'TN' )
,                    ( 43, 'Texas',          'TX' )
,                    ( 44, 'Utah',           'UT' )
,                    ( 45, 'Vermont',        'VT' )
,                    ( 46, 'Virginia',       'VA' )
,                    ( 47, 'Washington',     'WA' )
,                    ( 48, 'West Virginia',  'WV' )
,                    ( 49, 'Wisconsin',      'WI' )
,                    ( 50, 'Wyoming',        'WY' )

GO
INSERT INTO tblMajor ( Id, Name,              Code,  [Desc]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               )
VALUES               ( 1,  'Legal Studies',   'LGL', 'Under attorney supervision, paralegals prepare legal documents, interview clients and witnesses, summarize witness statements and much more. You can train to become a paralegal through Davenport’s ABA-approved paralegal program. Through internships and coursework, you’ll practice conducting investigations, do legal and factual research, draft documents and help prepare for and present at trials. By becoming a paralegal you’ll play an integral part of any legal team. '                                                            )
,                    ( 2,  'Human Resources', 'HR',  'Human resources is critical to sustaining and growing any business. Human resource management focuses on the function of people within organizations, including hiring and managing staff. Through the human resource management associates degree at Davenport, you’ll be introduced to the HR field through relevant and practical coursework that reflects foundational as well as up-to-date challenges and trends in human resources associate jobs.'                                                                                          )
,                    ( 3,  'Nursing',         'NRS', 'A master of science in nursing is a graduate-level academic degree that gives working nurses and students a pathway to advanced nursing roles and a higher nursing salary. As a Davenport MSN family nurse practitioner graduate, you’ll be prepared to serve a diverse patient base across the socioeconomic spectrum and in settings from community outreach clinics to private practices. You’ll be a primary point of contact for the health care needs of individuals and families and have the ability to track, treat and educate patients.' )
,                    ( 4,  'Accounting',      'ACC', 'Through Davenport’s customizable MAcc degree, you will graduate ready and in demand for a range of jobs as an accountant. The MAcc program prepares you to take certification exams in your area of career interest, including the Certified Public Accountant (CPA), Certified Managerial Accountant (CMA), Certified Financial Planner (CFP) and Certified Financial Manager (CFM) exams. '                                                                                                                                                       )
,                    ( 5,  'Data Science',    'DS',  'A data analyst reviews data to identify key insights into a business’s customers and ways the data can be used to solve problems. They also communicate this information to company leadership and other stakeholders.'                                                                                                                                                                                                                                                                                                                             )
GO
-- Creates DB Entries, 6 active, 2 in the trash
INSERT INTO tblStudent ( Id,                                     StudentId,    FirstName,  LastName, StateId, MajorId, GPA,  Status )
VALUES                 ( '09EA8CD5-0300-0000-2308-202305211447', '11236451',     'RyanTEST', 'Last',   1,       2,       3.33, 'A'    )
,                      ( '7B84C77E-0100-0000-0687-202305221357', '11236452', 'Ryan',     'Red',    1,       2,       0.00, 'A'    )
,                      ( '782051A4-0100-0000-1818-202305221358', '11236453', 'Bobby',    'Blue',   1,       2,       3.33, 'A'    )
,                      ( '3D528E6C-0100-0000-4782-202305221358', '11236454', 'Silly',    'Green',  1,       2,       3.13, 'A'    )
,                      ( '9CC1FC73-0A00-0000-4981-202305221548', '11236455',    'Ryan',     'Bob',    13,      3,       3.33, 'A'    )
,                      ( '5199188C-2900-0000-4315-202305221556', '11236456',   'Ryan',     'Dylan',  3,       2,       3.53, 'A'    )
,                      ( '5199188C-2900-0000-4215-202305221556', '11236457',   'Red',      'Dylan',  3,       2,       3.53, 'D'    )
,                      ( '5199188C-2900-0000-4115-202305221556', '11236458',   'Blue',     'Dylan',  3,       2,       3.53, 'D'    )
GO
DROP PROCEDURE IF EXISTS [dbo].[spStudent]
GO
-- IN
CREATE PROCEDURE [dbo].[spStudent]
	  @Json varchar(MAX) = NULL
	, @Action int        = -1
AS
BEGIN
	SET NOCount ON;
	IF @Action NOT IN (1,2,3)
		RETURN
	SELECT x.*
		INTO #Student
	FROM OPENJSON(@Json) WITH(
	[Id] UNIQUEIDENTIFIER,
	[StudentId] VARCHAR (10) ,
	[FirstName] VARCHAR (50) ,
	[LastName] VARCHAR (50) ,
	[StateId] INT ,
	[MajorId] INT ,
	[GPA] NUMERIC (4, 2) ,
	[Status] VARCHAR (1) ,
	[DateAdded] DATETIME ,
	[DateModified] DATETIME
	) x
	IF @Action IN(1/*Insert*/,2/*Update*/)
	BEGIN
		INSERT INTO dbo.tblStudent ( [Id], [StudentId], [FirstName], [LastName], [StateId], [MajorId], [GPA], [Status] )
		SELECT S.[Id]
			,  S.[StudentId]
			,  S.[FirstName]
			,  S.[LastName]
			,  S.[StateId]
			,  S.[MajorId]
			,  S.[GPA]
			,  S.[Status]
		FROM      #Student       S--Source
		LEFT JOIN dbo.tblStudent T--Target
			ON T.Id=S.Id
		WHERE T.Id IS NULL;
		UPDATE T
		SET T.StudentId =      S.StudentId
		,   T.[FirstName] =    S.[FirstName]
		,   T.[LastName] =     S.[LastName]
		,   T.[StateId] =      S.[StateId]
		,   T.[MajorId] =      S.[MajorId]
		,   T.[GPA] =          S.[GPA]
		,   T.[Status] =       S.[Status]
		,   T.[DateModified] = GetDate()
		FROM       dbo.tblStudent T --Target
		INNER JOIN #Student       S --Source
			ON S.Id=T.Id;
		RETURN
	END
	IF @Action IN (3/*Delete*/)
	BEGIN
		DELETE T
		FROM       dbo.tblStudent T --Target
		INNER JOIN #Student       S --Source
			ON S.Id=T.Id;
		RETURN
	END
END
GO
DROP PROCEDURE IF EXISTS [dbo].[CheckStudentId]
GO
-- Checks Student ID, if exists returns 1, otherwise 0
CREATE PROCEDURE [dbo].[CheckStudentId]
	@StudentId varchar(20) = NULL
AS
BEGIN
	SET NOCOUNT ON;
	SELECT [Exists] = CONVERT(bit, ISNULL((
		SELECT 1
		FROM tblStudent
		WHERE StudentId = @StudentId), 0))
END
GO
