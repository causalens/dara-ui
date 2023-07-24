import { faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CompressArrowsAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CompressArrowsAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCompressArrowsAlt} {...props} />;
};

export default CompressArrowsAlt;
