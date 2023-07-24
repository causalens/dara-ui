import { mdiInformationOutline } from '@mdi/js';

import { IconProps, StyledMDIcon } from './icon-utils';

/**
 * A InformationOutline icon from Material Design
 *
 * @param {IconProps} props - the component props
 */
const InformationOutline = (props: IconProps): JSX.Element => {
    return <StyledMDIcon path={mdiInformationOutline} {...props} />;
};

export default InformationOutline;
