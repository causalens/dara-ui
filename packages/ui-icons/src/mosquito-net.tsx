import { faMosquitoNet } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MosquitoNet icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MosquitoNet = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMosquitoNet} {...props} />;
};

export default MosquitoNet;
