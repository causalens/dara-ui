import { faCropAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CropAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CropAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCropAlt} {...props} />;
};

export default CropAlt;
