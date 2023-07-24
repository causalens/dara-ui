import { faHeadSideVirus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HeadSideVirus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HeadSideVirus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeadSideVirus} {...props} />;
};

export default HeadSideVirus;
